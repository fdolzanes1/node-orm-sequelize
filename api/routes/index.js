const express = require('express');
const pessoasRoutes = require('./pessoasRoutes');
const niveisRoutes = require('./niveisRoutes');
const turmasRoutes = require('./turmasRoutes');

const path = '/api'
module.exports = app => {
  app
    .use(express.json())
    .use(path, pessoasRoutes)
    .use(path, niveisRoutes)
    .use(path, turmasRoutes);
}