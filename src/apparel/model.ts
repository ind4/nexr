import { Schema, model } from 'mongoose'

const schemaOptions = {
    versionKey: false
}

const apparelSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: true
    },
    measurements: [{
        size: {
            type: String,
            required: true
        },
        chestLength: {
            type: Number,
            required: true
        },
        shirtLength: {
            type: Number,
            required: true
        }
    }]
}, schemaOptions)

export const Apparel = model('Apparel', apparelSchema)


