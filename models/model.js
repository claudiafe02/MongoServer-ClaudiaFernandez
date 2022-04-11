const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    placa: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true
    },
    aniofabri: {
        type: String, 
        required: true,
    },
    fechaventa: {
        type:String, 
        required: true,
    },
});
const Auto = mongoose.model('Auto', storeSchema);

module.exports = {Auto}