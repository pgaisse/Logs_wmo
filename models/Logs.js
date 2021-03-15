const mongoose =   require('mongoose');
const { Schema }  =   mongoose;


const LogSchema =  new Schema({
    file:{type: String},
    index:{type: String,index: { unique: true }},
    datetime: {type: Date},
    cuenta_origen: {type: String},
    pj_origen:{type: String},
    pj_origen: {type: String},
    ip_origen: {type: String},
    trade_locate_origen: {type: String},
    cuenta_destino: {type: String},
    pj_destino: {type: String},
    ip_destino: {type: String},
    trade_locate_destino: {type: String},
    item: {type: String},
    serial: {type: String},
    nivel: {type: String},
    skill: {type: String},
    opt: {type: String},
    ex: {type: String},
    acc: {type: String},
    harmony: {type: String}
    
});
module.exports=mongoose.model('Log', LogSchema);