const { default: mongoose } = require("mongoose");


const appStoreSchema = new mongoose.Schema({
    name: String,
    img_url: String,
    category: String
},
{collection: 'appstores'});

const AppStoreModel = mongoose.model('', appStoreSchema);

module.exports = AppStoreModel;