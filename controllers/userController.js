const User = require('../models/userModel');

class UserController {

    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);

        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createUser(req, res){
        try{

            const user =await User.create(req.body);
            res.status(210).json(user);

        }

     catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const users = await User.findById(req.params.id);
            if(!users){
                return res.status(404).json({message : "USER NOT  FOUND"});
            }
            res.json(users);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateUser(req, res){
        try{

            const user =await User.update(req.params.id, req.body);
            if(!user){
                return res.status(404).json({message : "USER NOT  FOUND"});
            }
            res.status(210).json(user);
        }

     catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteUserById(req, res) {
        try {
            const users = await User.deleteById(req.params.id);
            if(!users){
                return res.status(404).json({message : "USER NOT  FOUND"});
            }
            res.json(users);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

}

module.exports = UserController;