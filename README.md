# SaveDataByMongoose

## To use this module simply create a symlink using from within this module project directory by using below command -

### >> yarn link

## Then move to the directory of project where you want to use this module and use below command -

### >> yarn link SaveDataByMongoose

## Also dont forget to import this as dependency in index.js as below - 

### var savebymongoose = require('SaveDataByMongoose')

To use this module simply use method - 

### saveToDB(connectionString, schemaObj, modelName, data)

##Example -
  ```Javascript
  (async()=>{
    
    let schemaObj = {
      name:{
      type: String,
      require : true,
      trim : true
      },
      age:{
      type: Number,
      require : true,
      trim : true,
      validate : {
        validator : (val)=>{ return val > 18}, message : "Not mature !!"
      }
      }
    }
    
    let data = {
      name : "john",
      age : 25
    }
    
    try{
      let result = saveToDB("mongodb://localhost/dbname",schemaObj,"collectionName",data);
    }catch(e){
      let errorsArray = await showErrors(e);
      for(let error in errorsArray){
        console.log(errorsArray[error]);
      }
    }
  
  })();
  
  ```
