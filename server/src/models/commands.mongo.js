const mongoose=require('mongoose');

const commandSchema=new mongoose.Schema({
    commandText: {
        type: String, 
        required: true
    }, 
    commandNum: {
        type: Number, 
        required: true
    }
});

module.exports=mongoose.model('commands', commandSchema);  