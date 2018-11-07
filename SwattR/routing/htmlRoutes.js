const path = require("path");

module.exports = function(app) {

app.get('/account', function(req, res){
    res.sendFile(path.join(__dirname, "../public/account.html"));
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}