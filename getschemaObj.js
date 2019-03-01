let schema = {

    provider :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Provider Name cannot be blank"
        }
    },

    productName :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Product Name cannot be blank"
        }
    },

    releaseVersion :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Release Version cannot be blank"
        }
    },

    appUrl :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Application URL cannot be blank"
        }
    },

    serviceUrl :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Service URL cannot be blank"
        }
    },

    gitUrl :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Git Branch URL cannot be blank"
        }
    },

    releaseDate :{
        name: "Release Date",
        type: Date,
        require: false,
        trim : true
    },

    currentDate :{
        type: Date,
        require: false,
        trim : true,
        default : Date.now()
    }


}

module.exports = schema;