const server=require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection.js');

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`😎estoy re cool ${PORT}😎`);
        });
    })
    .catch((error) => console.log(error));
 