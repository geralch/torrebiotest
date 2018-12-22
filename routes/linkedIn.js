var express = require('express');
var router = express.Router();
var request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
/* GET users listing. */

router.post('/getInformation', (req, res, next) => {

  let profile = req.body;
  let parsed = profile

let Linkedin = require('node-linkedin')('78cbgwouwemnh6', 'OTwV3cf4oKJfD2cN');
  let linkedin = Linkedin.init(parsed.authToken);

  let scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
  linkedin.people.id(profile.id, function(err, $in) {
    // Loads the profile by id.
});

  res.status(200).send({ status:"" })
});







module.exports = router;
