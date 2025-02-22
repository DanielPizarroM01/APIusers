const pool = require('../config/db')

class User{

    static async findAll(){
        const result = await pool.query('SELECT * FROM users')
        return result.rows;
    }

    static async create(data){
        const {name, email} = data; //{"name": "Jose", "email":"jose@asd"}
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return result.rows[0];
    }

    static async findById(id){
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data){
        const {name, email} = data;
        const result =await pool.query('UPDATE users set name =$1, email=$2 where id=$3 RETURNING *',[name,email,id]);
        return result.rows[0];

    }

    static async deleteById(id){
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }

}
module.exports = User;