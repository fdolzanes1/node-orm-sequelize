const express = require('express');
const pessoasRoutes = require('./pessoasRoutes');
const niveisRoutes = require('./niveisRoutes');

const path = '/api'
module.exports = app => {
  app.use(express.json());
  app.use(path, pessoasRoutes);
  app.use(path, niveisRoutes);
}