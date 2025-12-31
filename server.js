const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/models');
const artistRoutes = require('./src/routes/artistRoutes');
const albumRoutes = require('./src/routes/albumRoutes');
const songRoutes = require('./src/routes/songRoutes');
const branchRoutes = require('./src/routes/branchRoutes');
const revivalRoutes = require('./src/routes/revivalRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/artists', artistRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/revivals', revivalRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('PraiseVault API is running');
});

// Sync Database and Start Server
db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
