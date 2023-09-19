var express = require('express');
var qr = require('qrcode');
var ejs  = require('ejs')
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');
app.get('/',function(request,response){
    response.render('index');
});

app.post('/scan',function(request,response){
    // response.render('scan');
    var input_text = request.body.text;
    console.log(input_text);    
    qr.toDataURL(input_text,function(err,src){
        response.render('scan',{
            qr_code:src,
        })
    })
})

app.listen('3000',function(){
    console.log("Listening to our server on port 3000")
})