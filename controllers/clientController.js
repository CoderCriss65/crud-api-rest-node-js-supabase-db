const service = require('../services/clientService');

const crearCliente = async (req, res) => {
  const { cliente, error } = await service.crearCliente(req.body);
  if (error) return res.status(400).json({ error });
  res.status(201).json(cliente);
};

const obtenerClientes = async (_req, res) => {
  const { clientes, error } = await service.obtenerClientes();
  if (error) return res.status(500).json({ error });
  res.json(clientes);
};

const obtenerClientePorId = async (req, res) => {
  const { cliente, error } = await service.obtenerClientePorId(req.params.id);
  if (error) return res.status(404).json({ error });
  res.json(cliente);
};

const actualizarCliente = async (req, res) => {
  const { cliente, error } = await service.actualizarCliente(req.params.id, req.body);
  if (error) return res.status(400).json({ error });
  res.json(cliente);
};

const eliminarCliente = async (req, res) => {
  const { cliente, error } = await service.eliminarCliente(req.params.id);
  if (error) return res.status(400).json({ error });
  res.json({ eliminado: true });
};

module.exports = {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente
};