const mongoose = require('mongoose')

let connect = conString => {
  mongoose.connect(conString,{useNewUrlParser:true});
  return mongoose.connection;
}

let disconnect = con => {
  return new Promise((resolve, reject) => {
    mongoose.connection.close(err => {
      if (err) {
        console.log('Error in closing connection')
      }
    })
  })
}

let compile = (schemaDef, modelName, data) => {
  var model
  let schema = mongoose.Schema(schemaDef)
  let keys = Object.keys(mongoose.models)
  if (keys.indexOf(modelName) !== -1) {
    model = mongoose.model(modelName)
  } else {
    model = mongoose.model(modelName, schemaDef)
  }
  var document = new model(data)
  return document
}

let insert = document => {
  return new Promise((resolve, reject) => {
    document.save((err, response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}


async function perform (data) {
  let con = await connect('mongodb://localhost/demodb')
  let cmodel = await compile(
    {
      name: { type: String }
    },
    'development',
    {
      name: 'john'
    }
  )

  let dmodel = await compile(
    {
      name: { type: String }
    },
    'development',
    {
      name: 'jack'
    }
  )

  let result1 = await insert(cmodel)
  console.log(result1)

  let result2 = await insert(dmodel)
  console.log(result2)
}



async function perform2 (data) {
    let con = await connect('mongodb://localhost/demodb')
    let cmodel = await compile(
      {
        name: { type: String }
      },
      'development',
      {
        name: 'john'
      }
    )
  
    let dmodel = await compile(
      {
        name: { type: String }
      },
      'development',
      {
        name: 'jack'
      }
    )
  
    let result1 = await insert(cmodel)
    console.log(result1)
  
    let result2 = await insert(dmodel)
    console.log(result2)
  }

// perform().catch((e)=>{
//     console.log(e);
// })

// perform2().catch((e)=>{
//     console.log(e);
// })

// setInterval(() => {
//     perform().catch((e)=>{
//         console.log(e);
//     })
//     perform2().catch((e)=>{
//         console.log(e);
//     })
// }, 3000);
module.exports = {
  connect : connect,
  compile : compile,
  insert : insert,
  disconnect : disconnect
}