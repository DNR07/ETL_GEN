const commandsModel=require('../models/commands.mongo');

async function saveCommand(commandData){
    const command= new commandsModel(commandData);
    const output= await command.save()
    console.log(output);
}

module.exports={
    saveCommand,
}