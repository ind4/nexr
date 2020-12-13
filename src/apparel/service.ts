import { Apparel } from "./model"

export async function createApparel(input) {
    return new Promise(async (resolve, reject) => {
        const apparel = new Apparel({ ...input, id: new Date().getTime() }) //in practice, use a central system to generate auto incrementing ID
        try {
            resolve(await apparel.save())
        } catch (reason) {
            reject(reason)
        }
    })
}