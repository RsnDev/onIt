var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    //password: "yourpassword",
    database: "onit"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE registration (name VARCHAR(255), emailId VARCHAR(255), phone VARCHAR(225))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});