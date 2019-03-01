const mongoose = require('mongoose');
const schemaObj = require('./getschemaObj.js');

let saveToDB = async (connectionString, schemaObj, modelName, data) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(connectionString, { useNewUrlParser: true });
        var db = mongoose.connection;

        db.once('open', function () {
            console.log("Database is ready now");
            getModelReference(schemaObj, modelName).then((modelReference) => {
                getCompiledModel(modelReference, data).then((cmodel) => {
                    cmodel.save((err, res) => {
                        if (err) {
                            mongoose.disconnect(mongoose.connection);
                            reject({
                                key: "Model Save Error",
                                message: err
                            })
                        } else {
                            mongoose.disconnect(mongoose.connection);
                            resolve({
                                key: "Model Saved",
                                message: res
                            })
                        }
                    })

                }).catch((err) => {
                    mongoose.disconnect(mongoose.connection);
                    reject({
                        key: "Model Compilation Error",
                        message: err
                    })
                })

            }).catch((err) => {
                mongoose.disconnect(mongoose.connection);
                reject({
                    key: "Model Error",
                    message: err
                })
            })

        });

        db.on('error', function (err) {
            console.log(err);
            reject({
                key: "db connection",
                message: err
            })
        })
    })
}


let getCompiledModel = (modelReference, data) => {

    return new Promise((resolve, reject) => {
        let cmodel = new modelReference(data);
        resolve(cmodel);
    })
}

let getModelReference = async (schemaObj, modelName) => {

    return new Promise((resolve, reject) => {
        let schema = new mongoose.Schema(schemaObj);
        resolve(mongoose.model(modelName, schema));
    })

}

let showErrors = (e) => {

    return new Promise((resolve, reject) => {
        let errorArray = [];
        if (e.message.errors) {
            let errorsObj = e.message.errors;
            for (const key in errorsObj) {
                if (errorsObj.hasOwnProperty(key)) {
                    // console.log(key);
                    // console.log(errorsObj[key].message);
                    errorArray.push(errorsObj[key].message);
                }
            }
        }
        resolve(errorArray);
    })
}

// For Testing Purpose ..

// (async () => {
//     let schema = schemaObj;
//     let modelname = "ReleaseDetails";
//     let data = {
//         provider: "test",
//         productName: "test",
//         releaseVersion: "test",
//         appUrl: "test",
//         serviceUrl: "test",
//         gitUrl: "test",
//         releaseDate: ""
//     };

//     try {
//         let result = await saveToDB('mongodb://localhost/surroundproducts', schema, modelname, data);
//         console.log(JSON.stringify(result, false, 3));

//     } catch (e) {
//         console.log(JSON.stringify(e, false, 3));
//         let allErrorsArray = await showErrors(e);
//         for (const key in allErrorsArray) {
//             console.log(allErrorsArray[key]);
//         }
//     }
// })();

