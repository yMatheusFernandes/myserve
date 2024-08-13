const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configuração do multer para salvar arquivos na pasta 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.static('uploads'));

// Rota para upload de arquivos
app.post('/upload', upload.array('files'), (req, res) => {
    res.send('Arquivos enviados com sucesso');
});

// Rota para download de arquivos
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'uploads', filename);

    if (fs.existsSync(filepath)) {
        res.download(filepath);
    } else {
        res.status(404).send('Arquivo não encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

