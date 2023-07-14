const path = require('path');



const getMessages = (req, res) => {
    res.sendFile(path.join(__dirname,'..','public','images','fia 17.jpg'))
    //res.sendFile(`${__dirname}/../public/images/fbfb.png`)
//    res.send('<ul><li>Hello Albert!</li></ul>>');
};

const postMessages = (req, res) => {
    console.log('Updating messages...');
};

module.exports = {
    getMessages,
    postMessages,
};


