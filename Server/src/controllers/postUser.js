const {User} = require('../DB_connection')

const  postUser = async (req, res) =>  {
    try{
        const {password, email} = req.body

        if(!password||!email) return res.status(400).json({error:"faltan datos"})

        const userFinded = await User.findOne({ where: { email } });
        if(userFinded) return res.status(400).json({error:"ups usuario se se encuentra en la base de datos"})

        const newUser = await User.create({email,password})
        res.status(200).json({email:newUser.dataValues.email,id:newUser.dataValues.id})


    }catch (error) {
        console.log(error.message)
    }
} 

module.exports=postUser