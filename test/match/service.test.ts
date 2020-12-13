import { getMatchingSize } from '../../src/match/service'
import { Apparel } from '../../src/apparel/model';
import { BodyMeasurement } from '../../src/bodyMeasurement/model';

test('shirt size is matched for given user', async () => {
    const apparel = new Apparel({
        "measurements": [
            {
                "size": "XL",
                "chestLength": 24,
                "shirtLength": 28
            }
        ]
    })

    const bodyMeasurement = new BodyMeasurement({
        "_id": "5fd68db93879152b9cb20199",
        "chestGirth": 1.288,
        "shirtLength": 0.711,
        "id": "222"
    })
    //@ts-ignore
    jest.spyOn(Apparel, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(apparel)) })
    //@ts-ignore
    jest.spyOn(BodyMeasurement, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(bodyMeasurement)) })
    expect(await getMatchingSize("122", "222")).toBe("XL")
})


test('shirt size is not matched for given user', async () => {
    const apparel = new Apparel({
        "measurements": [
            {
                "size": "XL",
                "chestLength": 24,
                "shirtLength": 31
            }
        ]
    })

    const bodyMeasurement = new BodyMeasurement({
        "_id": "5fd68db93879152b9cb20199",
        "chestGirth": 1.288,
        "shirtLength": 0.711,
        "id": "222"
    })
    //@ts-ignore
    jest.spyOn(Apparel, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(apparel)) })
    //@ts-ignore
    jest.spyOn(BodyMeasurement, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(bodyMeasurement)) })
    expect(getMatchingSize("122", "222")).rejects.toMatch("Not found")
})

test('apparel not found', async () => {
    const apparel = new Apparel({
        "measurements": [
            {
                "size": "XL",
                "chestLength": 24,
                "shirtLength": 28
            }
        ]
    })

    const bodyMeasurement = new BodyMeasurement({
        "_id": "5fd68db93879152b9cb20199",
        "chestGirth": 1.288,
        "shirtLength": 0.711,
        "id": "222"
    })
    //@ts-ignore
    jest.spyOn(Apparel, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(null)) })
    expect(getMatchingSize("122", "222")).rejects.toMatch('Apparel Not Found')
})

test('body measurement not found', async () => {
    const apparel = new Apparel({
        "measurements": [
            {
                "size": "XL",
                "chestLength": 24,
                "shirtLength": 31
            }
        ]
    })

    //@ts-ignore
    jest.spyOn(Apparel, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(apparel)) })
    //@ts-ignore
    jest.spyOn(BodyMeasurement, 'findOne').mockReturnValueOnce({ exec: jest.fn().mockReturnValueOnce(Promise.resolve(null)) })
    expect(getMatchingSize("122", "222")).rejects.toMatch("Body Measurement Not Found")
})