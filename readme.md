# Determine suitable T-Shirt Size

## Why?
### TypeScript
Its JavaScript with types and is best way to avoid compile time errors.

### Mongodb
The data structure we have must be more flexible, for eg. body measurements may change in future with more precise/part wise size calculation. Mongodb is also easily scalable

### Measurement Units
According to pdf and input JSONs, its been given that, body measurements will be in meters, apparel can be either in inches or/and centimeters. Provided a chance, we can either store in a standard unit (which makes sense according to application and acceptable decimal places).

As part of coding challenge, I have stored body measurements in meters, apparel sizes in inches and fix the units at the time of calculation.

### Error handling
I have a simple error handling in place, as I didnt wanted to spend lot of time on it

### Tests
1. Run `yarn run jest` to run tests. Currently, only matching part is being unit tested.
2. Run `yarn run jest --coverage` to run test coverage, a HTML report is generated at `coverage/lcov-report` folder

### How to run the project?
1. `yarn` to install dependencies
2. `docker-compose up -d mongodb` to start local mongodb server
3. `npm run dev` to start server
4. `npm run build` to run build to generage JS files out of TS files
5. `npm run start` to run the app in prod mode
the server will be running on http://localhost:3000 and following end points are made available

### Postman collection included
You can also import `postman_collection.json` to postman to run below methods easily

### Create Apparel
`POST /apparel/add`
with body sample
```json
{
    "title": "Unisex T Shirt",
    "measurements":[
        {
            "size":"S",
            "chestLength":18,
            "shirtLength":28
        },
        {
            "size":"M",
            "chestLength":20,
            "shirtLength":29
        },
        {
            "size":"L",
            "chestLength":22,
            "shirtLength":30
        },
        {
            "size":"XL",
            "chestLength":25,
            "shirtLength":27
        },
        {
            "size":"2XL",
            "chestLength":26,
            "shirtLength":32
        },
        {
            "size":"3XL",
            "chestLength":28,
            "shirtLength":33
        }
    ]
}
```

### Create body measurement
`POST body-measurement/add`
with body sample
```json
[
   {
      "name":"bodyHeight",
      "value":1.789
   },
   {
      "name":"crotchHeight",
      "value":0.709
   },
   {
      "name":"armpitLeftHeight",
      "value":1.278
   },
   {
      "name":"armpitRightHeight",
      "value":1.245
   },
   {
      "name":"neckBaseFrontHeight",
      "value":1.486
   },
   {
      "name":"neckBaseBackHeight",
      "value":1.533
   },
   {
      "name":"neckBaseGirth",
      "value":0.743
   },
   {
      "name":"midNeckHeight",
      "value":1.518
   },
   {
      "name":"midNeckGirth",
      "value":0.468
   },
   {
      "name":"chestHeight",
      "value":1.314
   },
   {
      "name":"chestGirth",
      "value":1.288
   },
   {
      "name":"naturalWaistHeight",
      "value":1.123
   },
   {
      "name":"naturalWaistGirth",
      "value":1.184
   },
   {
      "name":"seatGirthHeight",
      "value":0.809
   },
   {
      "name":"seatGirth",
      "value":1.256
   },
   {
      "name":"highHipHeight",
      "value":1.063
   },
   {
      "name":"highHipGirth",
      "value":1.205
   },
   {
      "name":"maxHipHeight",
      "value":0.908
   },
   {
      "name":"maxHipGirth",
      "value":1.245
   },
   {
      "name":"naturalWaistRise",
      "value":1.062
   },
   {
      "name":"naturalWaistFrontRise",
      "value":0.532
   },
   {
      "name":"naturalWaistBackRise",
      "value":0.53
   },
   {
      "name":"shirtLength",
      "value":0.711
   },
   {
      "name":"inseamLeftLength",
      "value":0.768
   },
   {
      "name":"inseamRightLength",
      "value":0.762
   },
   {
      "name":"outseamLeftLength",
      "value":1.16
   },
   {
      "name":"outseamRightLength",
      "value":1.165
   },
   {
      "name":"thighLeftGirth",
      "value":0.747
   },
   {
      "name":"thighRightGirth",
      "value":0.759
   },
   {
      "name":"wristLeftGirth",
      "value":0.203
   },
   {
      "name":"wristRightGirth",
      "value":0.201
   },
   {
      "name":"bicepLeftGirth",
      "value":0.381
   },
   {
      "name":"bicepRightGirth",
      "value":0.379
   },
   {
      "name":"acrossBackShoulderWidthLength",
      "value":0.427
   },
   {
      "name":"backShoulderWidthLength",
      "value":0.49
   },
   {
      "name":"fullSleeveLeftLength",
      "value":0.852
   },
   {
      "name":"fullSleeveRightLength",
      "value":0.834
   },
   {
      "name":"SleeveLeftLength",
      "value":0.606
   },
   {
      "name":"SleeveRightLength",
      "value":0.589
   }
]

```

### Match apparel to body measurement
`GET /match/:apparelId/:userId`