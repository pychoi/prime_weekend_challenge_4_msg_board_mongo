var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = require('../modules/schema');
var path = require('path');

//mongoose.connect('mongodb://localhost/message_board');
var Message = mongoose.model('Message', postSchema);

router.get('/data', function(req,res){
    Message.find({}, function(err, data){
        if (err) console.log(err);
        res.send(data);
    })
});

router.post('/data', function(req, res){

    var addedMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });

    addedMessage.save(function(err,data){
        if (err) console.log(err);
        res.send(data);
    });
});

router.delete('/data', function(req, res){
    Message.findByIdAndRemove({"_id": req.body.id}, function(err,data){
       if(err) console.log(err);
        res.send(data);
    });
});

router.get('/*', function(req,res){
    var file = req.params[0] || 'views/admin.html';
    res.sendFile(path.join(__dirname,"../public",file))
});


module.exports = router;
