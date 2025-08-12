const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques depuis la racine du projet
app.use(express.static(path.join(__dirname, '..')));

// Route principale pour la page de pré-vente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Route pour les pages légales
app.get('/mentions-legales.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'mentions-legales.html'));
});

app.get('/politique-confidentialite.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'politique-confidentialite.html'));
});

// Route pour les fichiers de traduction
app.get('/locales/:lang.json', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'locales', req.params.lang + '.json'));
});

// Route API pour vérifier le backend
app.get('/api', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Backend opérationnel',
    timestamp: new Date().toISOString()
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});