/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

const question = [
    {
        name: 'user_input',
        message: "What is the website?",
    }];

inquirer
    .prompt(question)
    .then((answers) => {
        const url = answers.user_input;
        console.log(url);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('the_qr_image.png'));

        fs.writeFile('user_input.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });