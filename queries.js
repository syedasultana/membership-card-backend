const Pool = require('pg').Pool
const pool = new Pool({
  user: 'syedasultana',
  host: 'localhost',
  database: 'membership',
  port: 5432,
})

const getProducts = async (request, response) => {
    await pool.query('SELECT * FROM products', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getInvoices = async (request, response) => {
  await pool.query('SELECT * FROM invoices', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getProducts,
    getInvoices
}