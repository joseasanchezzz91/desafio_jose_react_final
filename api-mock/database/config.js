var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin", "admin@example.com", md5("admin123456")])
                db.run(insert, ["user", "user@example.com", md5("user123456")])
            }
        })


        db.run(`CREATE TABLE peliculas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo text, 
            autor text , 
            descripcion text
            );`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO peliculas (titulo, autor, descripcion) VALUES (?,?,?);'
                db.run(insert, ["Jhon wick 2", "Esteban", "sangre,disparos,muerte"])
                db.run(insert, ["Jhon wick 3", "Estebandido", "sangre,disparos,muerte"])
            }
        })

    }



})


module.exports = db