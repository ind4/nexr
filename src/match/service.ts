import { Apparel } from "../apparel/model";
import { BodyMeasurement } from "../bodyMeasurement/model";

const meterToInches = 39.37;

export async function getMatchingSize(apparelId: string, userId: string) {

    return new Promise(async (resolve, reject) => {
        const apparel = await Apparel.findOne({ id: apparelId }).exec()
        if (!apparel) {
            reject("Apparel Not Found")
            return
        }

        const bodyMeasurement = await BodyMeasurement.findOne({ id: userId }).exec()
        if (!bodyMeasurement) {
            reject("Body Measurement Not Found")
            return
        }

        const chestLength = Math.floor(bodyMeasurement.get("chestGirth") / 2 * meterToInches);
        const shirtLength = Math.floor(bodyMeasurement.get("shirtLength") * meterToInches);

        const apparelMeasurement = apparel.get("measurements");

        const match = apparelMeasurement.find(element => {
            const currChestLength = Math.floor(element.get("chestLength"))
            const currShirtLength = Math.floor(element.get("shirtLength"))
            return (chestLength === currChestLength || chestLength === currChestLength + 1 || chestLength === currChestLength - 1) &&
                (shirtLength === currShirtLength || shirtLength === currShirtLength + 1 || shirtLength === currShirtLength - 1)
        });

        if (match) {
            resolve(match.get("size"))
        } else {
            reject("Not found")
        }
    })
}