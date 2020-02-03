// import { getDb } from '../util/database'
import { getDb, mongoConnect } from '../util/database'
//const getDb = _getDb
//const mongodb = require('mongodb')
import mongodb from 'mongodb'

export default class Product {
    constructor(itemCode, name, price, description, imageUrl, id) {
        this.itemCode = itemCode
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        this._id = id
    }

    save() {
        const db = getDb();
        let databaseOp

        if(this._id) {
            databaseOp = db.collection('products')
                .updateOne(
                    {_id: new mongodb.ObjectId(this._id)},
                    { $set: this })
        } else {
            databaseOp = db.collection('products')
                .insertOne(this)
        }

        return db
            .collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static fetchAll() {
        const db = getDb()
        return db
            .collection('products')
            .find()
            .toArray()
            .then(products => {
                console.log(products)
                return products
            })
            .catch(err => {
                console.log(err)
            })
    }

    static deleteById(id) {
        const db = getDb()
        return db.collection('products')
            .deleteOne({_id: new mongodb.ObjectID(id)})
            .then(result => {
                console.log('Delete')
            })
            .catch(err => {
                console.log(err)
            })
    }
}