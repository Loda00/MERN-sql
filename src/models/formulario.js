const { Pool } = require('pg')

const { config } = require('../connection.js')


class Formulario {

    constructor() {
        this.pool = new Pool(config)
    }

    async test() {
        const client = await this.pool.connect()
        let res = null
        try {
            res = await client.query('select * from tB_motivo')
            await client.query('COMMIT')
        } catch (error) {
            await client.query('ROLLBACK')
            throw new Error(error)
        } finally {
            client.release()
        }

        return res
    }

    async test2(id) {
        const client = await this.pool.connect()
        let res = null
        try {
            res = await client.query(`select * from tB_motivo where id_motivo = ${id}`)
            await client.query('COMMIT')
        } catch (error) {
            await client.query('ROLLBACK')
            throw new Error(error)
        } finally {
            client.release()
        }

        return res
    }

}


module.exports = {
    Formulario
}
