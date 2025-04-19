// services/db.js o config/db.js
const { supabase } = require('./db/supabaseClient');
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString, {
  ssl: 'require', // Recomendado para producción
});

export default sql;
