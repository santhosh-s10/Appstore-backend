const AppStoreModel = require("../models/appSoreModel")


exports.getImage = async(req, res)=>{
    try{
        if(req.query){
            const queryObject = {...req.query}
            var query = await AppStoreModel.find(queryObject);
        }
        else{
            var query = await AppStoreModel.find();
        }
        // if(req.query.sort){
        //     const sortUrl = req.query.sort.split(',').join(' ');
        //     var query = query.sort(sortUrl);
        // }
       
        res.json(query);
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}