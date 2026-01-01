const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path');
require('dotenv').config();

class AzureService {
    constructor() {
        this.connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
        this.containerName = process.env.AZURE_CONTAINER_NAME || 'songs';

        if (!this.connectionString) {
            console.warn('Azure Storage Connection String not found');
        }
    }

    async uploadFile(buffer, filename, containerName, contentType = 'audio/mpeg') {
        if (!this.connectionString) {
            throw new Error('Azure Storage configuration missing');
        }

        const targetContainer = containerName || this.containerName;

        try {
            const blobServiceClient = BlobServiceClient.fromConnectionString(this.connectionString);
            const containerClient = blobServiceClient.getContainerClient(targetContainer);

            // Ensure container exists
            await containerClient.createIfNotExists({
                access: 'blob' // Public read access for blobs
            });

            const blockBlobClient = containerClient.getBlockBlobClient(filename);

            await blockBlobClient.uploadData(buffer, {
                blobHTTPHeaders: { blobContentType: contentType }
            });

            return blockBlobClient.url;
        } catch (error) {
            console.error('Azure Upload Error:', error);
            throw error;
        }
    }
}

module.exports = new AzureService();
