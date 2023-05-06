const {Favorite} = require('../DB_connection')

const deleteFav = async (req,res) =>{
    try{
        const {id}= req.params
        if(!id) res.status(400).json({error:'no se encontro id'})

        const deleteFavorite = await Favorite.findByPk(id)
        if(!deleteFavorite) return res.status(400).json({error:`${id} no encontrado`})
        await deleteFavorite.destroy()

        const findAll=await Favorite.findAll()
        res.status(200).json({favoritos:findAll})
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

module.exports = deleteFav