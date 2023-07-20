import express from 'express';


const port = 3000;
const app = express();

app.get('/', function (req, res) {

    var today = new Date();
    var day = today.getDay();

    var dType = 'A weekday';
    var adv = 'Good work';

    if (day == 0 || day == 6) {
        dType = 'A weekends';
        adv = 'Happy';
    }

    res.render(
        'index.ejs',
        {
            dayType: dType,
            advise: adv,
        });
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});