const express = require('express')
const router = express.Router()

router.get('/user/login',(req, res)=>{
    let valid = false;
    let status = 500;
    if(req.body.user == 'dimhernandez@hotmail.com' && req.body.pass == '123')
    {
        valid = true;
        status = 200;
    }
    res.send({status:status,msg: valid})
})

module.exports = router