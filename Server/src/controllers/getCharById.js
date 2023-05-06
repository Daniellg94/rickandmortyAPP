const axios = require('axios');
const json = require('express');

const URL ="https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios(`${URL}${id}`);
        if(!response){ 
           throw new Error(`ID: ${id} Not found`)
        }
        const {status, name, species, origin, image, gender } = response.data;
            const data = { id, status, name, species, origin, image, gender };
            return res.status(200).json(data)

    } catch (error) {
        return error.message.includes('ID')
        ?res.status(404).json('Not found')
        :res.status(500).json({ message: error.message })
    }
}

/*const getCharById = (req,res) => {
    const {id} = req.params;
    axios(`${URL}${id}`)
    .then(response => {
        if(response){
            const { id, status, name, species, origin, image, gender } = response.data;
            const data = { id, status, name, species, origin, image, gender };
            res.json(data)
        }
        else res.status(404).json('Not fount')
    })
    .catch (error =>res.status(500).json({ message: error.message }))

}*/



module.exports = {getCharById}