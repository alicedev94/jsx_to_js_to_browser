const fs = require('fs');
const babel = require('@babel/core');
const path = require('path');

// Leer el archivo JSX
const inputFile = 'App.jsx';
const outputFile = 'App.js';
const code = fs.readFileSync(inputFile, 'utf8');

// Transformar con Babel
babel.transform(code, {
    presets: ['@babel/preset-react'],
}, function (err, result) {
    if (err) {
        console.error('Error al transformar:', err);
        return;
    }

    // Escribir el resultado
    fs.writeFileSync(outputFile, result.code);
    console.log(`Archivo convertido exitosamente: ${outputFile}`);
}); 