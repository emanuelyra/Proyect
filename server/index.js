const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const { Country } = require("./src/db.js");

conn
  .sync({ force: false }) 
  .then(() => {
    server.listen(PORT, async () => {
      const dataBase = Country.findAll();

      if (!dataBase.length) {
        const { data } = await axios("http://localhost:5000/countries");

        const mappedData = data.map((country) => {
          return {
            id: country.cca3,
            name: country.name.common,
            image: country.flags.svg,
            continent: country.continents.join(" - "),
            capital: country.capital
              ? country.capital.join(" - ")
              : "No  se encuentra Capital",
            subregion: country.subregion
              ? country.subregion
              : "No se encuentra subregion ",
            area: country.area,
            population: country.population,
          };
        });
        for (let i = 0; i < mappedData.length; i++) {
          await Country.findOrCreate({
            where: { name: mappedData[i].name },
            defaults: mappedData[i],
          });
        }
      
        console.log("Base de datos cargada ");
      }

      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
