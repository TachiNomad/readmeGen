const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// question for user
const questions = [
    console.log("Fill in the blanks please."),
];

//---------------------prompt start-----------------------------
const prompt = require('prompt');

prompt.start();
//-----------------questions------------------------------------
prompt.get(['Username', 'Email', 'Title', 'Description', 'Table_of_Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Test_examples'], function (err, result) {
    if (err) { return onErr(err); }

    Rusername = result.Username
    Remail = result.Email

    Rtitle = result.Title
    Rdescrip = result.Description
    RTable = result.Table_of_Contents
    Rinstall = result.Installation
    Ruse = result.Usage
    Rlice = result.License
    Rcontr = result.Contributing
    Rtest = result.Test_examples

//-------------------------------readme make---------------------
    fs.writeFile("readme.md",
        "# " + Rtitle + 
        "\r\n" +
        "\r\n" + "## Description" +
        "\r\n" +
        "\r\n" + Rdescrip +
        "\r\n" +
        "\r\n" + "## Table of Contents" +
        "\r\n" +
        "\r\n" + RTable +
        "\r\n" +
        "\r\n" + "## Installation" +
        "\r\n" +
        "\r\n" + Rinstall +
        "\r\n" +
        "\r\n" + "## Usage" +
        "\r\n" +
        "\r\n" + Ruse +
        "\r\n" +
        "\r\n" + "## License" +
        "\r\n" + 
        "\r\n" + Rlice +
        "\r\n" +
        "\r\n" + "## Contributing" +
        "\r\n" + 
        "\r\n" + Rcontr +
        "\r\n" +
        "\r\n" + "## Tests" +
        "\r\n" +
        "\r\n" + Rtest +
        "\r\n" +
        "\r\n" + "## Questions" +
        "\r\n" +
        "\r\n" + Rusername + "  " + Remail
        , 
        function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was made!");
    }); 
});




function onErr(err) {
    console.log(err);
    return 1;
}