const mongoose = require('mongoose')

let db = mongoose.connect('mongodb://0.0.0.0:27017/eventsDB',{ useNewUrlParser: true } , (err)=> {

    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...') 
    }
})
