const express = require('express')

const app = express()




var date = new Date();
var hours =date.getHours();
if (hours>8 && hours<17){
    app.use(express.static(__dirname+'/public/'))
    
}
else {
    app.use(function (req,res,next){
        res.send(__dirname+'/public/message.html')
    }
    )
}



app.listen(3000, (err) => {
    if (err)console.log("server not running")
    else console.log("server is running on port 3000")
})
