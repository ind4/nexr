import { BodyMeasurement } from "./model";

interface BodyMeasurementInput { name: string; value: number; }

export async function createBodyMeasurement(input: BodyMeasurementInput[]) {
    return new Promise(async (resolve, reject) => {
        const measurements = {}
        input.forEach((measurement: { name: string; value: number; }) => {
            measurements[measurement.name] = measurement.value;
        });
        const bodyApparel = new BodyMeasurement({ ...measurements, id: new Date().getTime() }) //in practice, use a central system to generate auto incrementing ID
        try {
            resolve(await bodyApparel.save())
        } catch (e) {
            reject(e)
        }
    })
}