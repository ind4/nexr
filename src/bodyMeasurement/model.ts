import { Schema, model } from 'mongoose'

const schemaOptions = {
    versionKey: false
}

const bodyMeasurementSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    shirtLength: {
        type: Number,
        required: true
    },
    chestGirth: {
        type: Number,
        required: true
    }
}, schemaOptions)

export const BodyMeasurement = model('BodyMeasurement', bodyMeasurementSchema)


