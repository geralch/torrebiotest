var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
var torreBioApi="https://torre.bio/api";
router.post('/getBio', (req, res, next) => {
    let personId=req.body.id;
    request.get(`${torreBioApi}/bios/${personId}`,{json:true}, (error, response, body) => {
        if (error) {
            res.status(500).send({error:"error"})
            return console.error('error loading BIOS', error);
        }
        if(response.body.hasOwnProperty("code")){
            res.status(404).send(response.body)
        }else{
            res.status(200).send(response.body)
        }
    })

});

module.exports = router;
