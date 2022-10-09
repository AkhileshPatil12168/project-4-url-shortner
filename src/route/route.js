const express = require('express')
const router = express.Router()
const {createUrl, getUrl} = require("../controller/urlController")


router.post ("/url/shorten", createUrl)
router.get('/:urlCode',getUrl)

router.all("/*", (req, res) => { res.status(400).send({ status: false, message: "Endpoint is not correct plese provide a proper end-point" }) })

module.exports=router