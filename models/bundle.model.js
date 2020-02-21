import mongoose from 'mongoose';

const Schema = mongoose.Schema

const bundleSchema = new Schema({
    bundle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
})

export default mongoose.model('Bundle', bundleSchema)
