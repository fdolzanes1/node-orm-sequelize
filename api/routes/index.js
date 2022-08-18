const express = require('express');
const pessoasRoutes = require('./pessoasRoutes');

const path = '/api'
module.exports = app => {
  app.use(express.json());
  app.use(path, pessoasRoutes);
}