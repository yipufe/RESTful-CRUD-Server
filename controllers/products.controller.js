import { join } from 'path'

import Product from '../models/product.model' 
import mongodb from 'mongodb'

export const postAddProduct = (req, res, next)=>{
    const product = new Product(
        req.body.itemCode, 
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.imageUrl)
    product.save()
        .then(result => {
            console.log('Created Product')
            res.send('Created Product! Check your DB')
        })
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const putUpdateProduct = (req, res, next) => {
    const product = new Product(
        req.body.itemCode, 
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.imageUrl,
        new mongodb.ObjectId( req.body.id )
    )
    product.save()
        .then(result => {
            console.log("Update Product")
            res.send('Updated Product! Check your DB')
        })
}

export const deleteProduct = (req, res, next) => {
    const id = req.body.id
    Product.deleteById(id)
        .then(() => {
            console.log('Product Deleted')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProducts = (req, res, next)=>{
    Product.fetchAll()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err)
        })
    
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const getMain = (req, res, next)=>{
    res.sendFile(join(__dirname, '../', 'views', 'index.html'))
}

