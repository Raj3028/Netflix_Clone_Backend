const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController.js");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

router.get('/test', (req, res)=>{
  return res.status(200).json({status:true, message: "Server run successfully"})
})

module.exports = router;
