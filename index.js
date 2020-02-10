import express from 'express'
import path from 'path'
import pageRoutes from './routes/pages.route'
import bodyParser from 'body-parser'
import {getError} from './controllers/error.controller'
import session from 'express-session'
import mongoose from 'mongoose'

//import {mongoConnect} from './util/database'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
//secret <- For the HASH, should be a long value for production
//resave <- Session will not be saved on every session, only on changes
//saveUninitialized <- if false session cookie will not be set unless the session is modified
app.use(session({secret: 'some secret hash', resave: false, saveUninitialized: false}))
app.use('/', pageRoutes)
app.use(getError)

//app.listen(5000)
const port = 5000
/*
mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server is up and running on port ${port}`)
    })
})*/
mongoose.connect('mongodb+srv://thatoneguy:12345xyz@dgm-cluster-fu5qw.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port)
    })
    .catch(err => {
        console.log(err)
    })



/*
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        price: Number,
        required: true
    },
    {
        description: String,
        retuired: true
    },
    {
        imageUrl: {
            type: String,   
            required: true
        }
    }
})

export const Product = mongoose.model('Product', productSchema)

//////

const product = new Product({
    title: title,
    price: price,
    description: desciption,
    imageUrl: imageUrl
})

product.save().then(result => {
    console.log()
    res.send('created Product')

})


*/
