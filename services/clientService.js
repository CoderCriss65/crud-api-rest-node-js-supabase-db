const { supabase } = require('./supabaseClient');

async function crearCliente(data) {
  const { data: cliente, error } = await supabase
    .from('clientes')
    .insert([data])
    .single();
  return { cliente, error };
}

async function obtenerClientes() {
  const { data: clientes, error } = await supabase
    .from('clientes')
    .select('*');
  return { clientes, error };
}

async function obtenerClientePorId(id) {
  const { data: cliente, error } = await supabase
    .from('clientes')
    .select('*')
    .eq('id', id)
    .single();
  return { cliente, error };
}

async function actualizarCliente(id, cambios) {
  const { data: cliente, error } = await supabase
    .from('clientes')
    .update(cambios)
    .eq('id', id)
    .single();
  return { cliente, error };
}

async function eliminarCliente(id) {
  const { data: cliente, error } = await supabase
    .from('clientes')
    .delete()
    .eq('id', id)
    .single();
  return { cliente, error };
}

module.exports = {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente
};