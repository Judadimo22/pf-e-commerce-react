const express = require("express");
const {
  controllerAuth,
  tokenValidator,
  logOut,
  allUsuarios,
} = require("../controllers/authController");

const router = express.Router();

console.log(tokenValidator);

router.get("/cachimba", async (req, res) => {
  const cualquiera = await allUsuarios(req, res);
  console.log(cualquiera);
});

// router.get('/pokemon', async (req, res)=>{
//   const { name } = req.query; //!aca nombre x query
//     console.log(name)
//     const allPokemons = await getAllPokemons(); //! CAMBIAR ESTA HARDCADEADO!!!!-----------------------------------------
//     if (!name) {  //! sin query anda
//         res.json(allPokemons);
//     } else {  //! con query si anda
//         try {
//             console.log( "Imprimiendo", name)
//              const pokemon = allPokemons.filter((pokemon)=> pokemon.name.toLowerCase() === name.toLowerCase())
//              if(pokemon)return res.json(pokemon);
//              return res.status(408).send("We couldn't find your Pokemon")
//             } catch(error) {
//             res.status(402).send(error)
//             }
//     }
// });

router.get("/login", (req, res) => {
  controllerAuth(req, res);
});

router.get("/callback", (req, res) => {
  tokenValidator(req, res);
});

router.get("/logout", (req, res) => {
  logOut(req, res);
});

module.exports = router;
