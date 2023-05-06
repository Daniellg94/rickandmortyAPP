const {User} = require('../DB_connection')

const  login = async (req, res) =>  {
    try{
        const {password, email} = req.query

        if(!password||!email) return res.status(400).json({error:"faltan datos"})

        const userFinded = await User.findOne({ where: { email } });
        if(!userFinded) return res.status(400).json({error:"ups usuario no encontrado"})

        const newUser = await User.create({email,password})
        if(userFinded.dataValues.password !== password) res.status(400).json({error:"usuario o contraseña no encontradoo"})
        res.status(200).json({access: true})
        //res.status(200).json({email:newUser.dataValues.email,id:newUser.dataValues.id})

    }catch (error) {
        res.statis(500).json({error:error.message})
    }
} 

module.exports= login