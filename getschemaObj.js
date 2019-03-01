let schema = {

    pvdr :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Provider cannot be blank"
        }
    },

    pname :{
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

    rv :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Version cannot be blank"
        }
    },

    apurl :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Application cannot be blank"
        }
    },

    surl :{
        type: String,
        require: true,
        trim : true,
        validate : {
            validator : (value)=> {
                return value != "" && value != " "; 
            },
            message : "Service cannot be blank"
        }
    },

    gurl :{
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

    rdate :{
        name: "Release Date",
        type: Date,
        require: false,
        trim : true
    },

    cDate :{
        type: Date,
        require: false,
        trim : true,
        default : Date.now()
    }


}

module.exports = schema;