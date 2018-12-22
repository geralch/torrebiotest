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

router.post('/mergeInfo', (req, res, next) => {
    console.log(req.body)
    let personId=req.body.id;
    const linkedinInfo = {
        'name': `${req.body.data.firstName} ${req.body.data.lastname}`,
        'professionalHeadline' : req.body.data.headline
    };
    //request.put(`${torreBioApi}/people/${personId}`,{json:true}, (error, response, body = linkedinInfo) => {
        //console.log(linkedinInfo)
        //console.log(error)
        //console.log(response)
        //return response
    //})
});

module.exports = router;
