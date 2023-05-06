const{Favorite}= require('../DB_connection');


const postFav = async (req, res) =>
{
    try {
        const{id,name, origin, status, image, species, gender}=req.body;
        // if(userId===User)

        if(!id || !name||!origin ||!status||!image||!species||!gender) return res.status(401).json({error:"Faltan dato"})

        const FavoriteFinded = await Favorite.findByPk( id );

        if(FavoriteFinded)return res.status(400).json({error:'este favorito ya esta'});
        const newFavorite= await Favorite.create({id,name, origin, status, image, species, gender})
        const Allfavorite=await Favorite.findAll();
        return res.status(200).json(Allfavorite)

    } catch (error) {
        console.log(error);
      return res.status(500).send("algo anda mal")
    }

}

module.exports=postFav;