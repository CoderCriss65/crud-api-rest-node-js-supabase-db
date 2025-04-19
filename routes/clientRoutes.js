const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clientController');

router.post('/', ctrl.crearCliente);
router.get('/', ctrl.obtenerClientes);
router.get('/:id', ctrl.obtenerClientePorId);
router.put('/:id', ctrl.actualizarCliente);
router.delete('/:id', ctrl.eliminarCliente);

module.exports = router;