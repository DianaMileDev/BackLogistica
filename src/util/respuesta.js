exports.success = function(req, res, status = 200, message = 'Confirmado'){
    res.status(status).send({
        error: false,
        status:status,
        msg:message,
        body:req.body
    })
}

exports.error = function(req,res,status = 500,message = 'Error generado'){
    res.status(status).send({
        error:true,
        status:status,
        msg:message
    })
}