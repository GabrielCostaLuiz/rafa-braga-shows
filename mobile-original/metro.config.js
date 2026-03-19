const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Bloqueia a inclusão da biblioteca mongodb no bundle do app mobile (frontend)
// Isso evita que o Metro tente compilar o driver do banco de dados que usa módulos do Node.js
config.resolver.blacklistRE = /node_modules\/mongodb\/.*/;

module.exports = config;
