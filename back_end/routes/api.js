const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const registerControl = require("../controllers/register-details")
const pool = require("../dataBase/dbCon")

router.get("/", (req, res) => {
  pool.query("SELECT * FROM login_info",
  (res)=>{
    console.log(res)
  })
});

router.post('/register',registerControl.create)

module.exports =  router;