const {saveCommand}=require('../models/commands.model');

async function postCommand(req, res){
    const commandData={
        commandText: req.body.command_input,
        commandNum: req.body.command_number
    }
    saveCommand(commandData);
    res.status(201).json({status: "Command successfully added"});
}

module.exports={
    postCommand
}