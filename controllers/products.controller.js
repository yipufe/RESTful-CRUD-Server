import { join } from 'path'

import Product from '../models/product.model'
import Bundle from '../models/bundle.model'
import mongodb from 'mongodb'

export const postAddBundle = (req, res, next)=>{
    const bundle = new Bundle({
        bundle: req.body.bundle,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl})
    bundle.save()
        .then(result => {
            console.log('Created Bundle')
            res.status(201).json({message: 'Created Bundle! Check your DB'})
        })
        .catch(err => {
            res.send(err)
        })
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}


export const postAddProduct = (req, res, next)=>{
    const product = new Product({
        bottleType: req.body.bottleType,
        itemCode: req.body.itemCode,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl})
    product.save()
        .then(result => {
            console.log('Created Product')
            res.status(201).json({message: 'Created Product! Check your DB'})
        })
        .catch(err => {
            res.send(err)
        })
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const getProduct = (req, res, next) => {
    const prodId = req.params.prodId
    Product.findById(prodId)
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            console.log(err)
        })
}


export const putUpdateProduct = (req, res, next) => {
    const prodId = req.params.prodId
    console.log("PUT:",prodId)
    Product.findById(prodId)
        .then(product => {
            product.bottleType = req.body.bottleType
            product.itemCode = req.body.itemCode
            product.price = req.body.price
            product.description = req.body.description
            product.imageUrl = req.body.imageUrl
            return product.save()
        })
        .then(result => {
            console.log("Update Product")
            res.redirect('/')
//            res.send('Updated Product! Check your DB')
        })
    
    // const product = new Product({
    //     bottleType: req.body.bottleType,
    //     itemCode: req.body.itemCode,
    //     price: req.body.price,
    //     description: req.body.description,
    //     imageUrl: req.body.imageUrl
    // })
    // product.save()
    //     .then(result => {
    //         console.log("Update Product")
    //     })
}

export const deleteProduct = (req, res, next) => {
    const prodId = req.params.prodId
    console.log(prodId)

    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log('Product Deleted')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

export const getBundles = (req, res, next)=>{
    Bundle.find()
        .then(bundles => {
            res.json(bundles)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProducts = (req, res, next)=>{
    Product.find()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err)
        })
    
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const getMain = (req, res, next)=>{
    console.log( req.session.isLoggedIn )
    req.session.isLoggedIn = true
    
    res.sendFile(join(__dirname, '../', 'views', 'index.html'))
}

    //const isLoggedIn = req.get('Cookie')
    //console.log("Cookie:", isLoggedIn)
    //Max-Age=10        10Seconds
    //Secure            only works on https
    //HttpOnly          js not allowed access to cookie
    //res.setHeader('Set-Cookie', 'loggedIn=true;')

    //npm install --save connect-mongodb-session
//const MongoDBStore = require('connect-mongodb-session')(session)
/*const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',

})*/