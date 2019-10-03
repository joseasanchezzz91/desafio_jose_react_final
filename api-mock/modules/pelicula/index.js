var middleware = require("../../jwt/middleware");
const {
    encryptPassword
} = require('../../crypto');

/**
 * 
 * @param {Express} app 
 * @param {Database} db 
 */
const peliculaModule = (app, db) => {
    app.get("/api/peliculas",middleware.ensureToken, async  (req, res, next) => {
        var sql = "select * from peliculas"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({
                    "errores": err.message
                });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": rows
                })
            }, 500);
        });
    });


    app.get("/api/peliculas/:id", (req, res, next) => {
        var sql = "select * from peliculas where id = ?"
        var params = [req.params.id]
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(400).json({
                    "error": err.message
                });
                return;
            }
            setTimeout(() => {
                res.json({
                    "message": "success",
                    "data": row
                })
            }, 1000);
        });
    });
app.post("/api/peliculas", middleware.ensureToken, async (req, res, next) => {
    // app.post("/api/peliculas", async (req, res, next) => {

        
        // const password = await encryptPassword(req.body.password);
        var errors = []
        if (!req.body.titulo) {
            errors.push("No titulo specified");
        }
        if (!req.body.autor) {
            errors.push("No autor specified");
        }
        if (!req.body.descripcion) {
            errors.push("No descripcion specified");
        }
        if (errors.length) {
            res.status(400).json({
                "error": errors.join(",")
            });
            return;
        }
        var data = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            descripcion: req.body.descripcion,
        }
        var sql = 'INSERT INTO peliculas (titulo, autor,descripcion) VALUES (?,?,?)'
        var params = [data.titulo, data.autor, data.descripcion]
        db.run(sql, params, function (err, result) {
            if (err) {
                res.status(400).json({
                    "error": err.message
                })
                return;
            }
            res.json({
                "message": "success",
                "data": data,
                "id": this.lastID
            })
        });
    })
    app.put("/api/peliculas/:id", middleware.ensureToken, async (req, res, next) => {
    // app.put("/api/peliculas/:id", async (req, res, next) => {
        var errors = []
        if (!req.body.titulo) {
            errors.push("No titulo specified");
        }
        if (!req.body.autor) {
            errors.push("No autor specified");
        }
        if (!req.body.descripcion) {
            errors.push("No descripcion specified");
        }
        if (errors.length) {
            res.status(400).json({
                "error": errors.join(",")
            });
            return;
        }
        var data = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            descripcion: req.body.descripcion
        }
        db.run(
            `UPDATE peliculas set 
               titulo = coalesce(?,titulo), 
               autor = COALESCE(?,autor), 
               descripcion = coalesce(?,descripcion) 
               WHERE id = ?`, [data.titulo, data.autor, data.descripcion, req.params.id],
            (err, result) => {
                if (err) {
                    res.status(400).json({
                        "error": res.message
                    })
                    return;
                }
                res.json({
                    message: "successo",
                    data: data
                })
            });
    })

    app.delete("/api/peliculas/:id", middleware.ensureToken,(req, res, next) => {
        db.run(
            'DELETE FROM peliculas WHERE id = ?',
            req.params.id,
            function (err, result) {
                if (err) {
                    res.status(400).json({
                        "error": res.message
                    })
                    return;
                }
                res.json({
                    "message": "deleted",
                    rows: this.changes
                })
            });
    })


    // Root path
    app.get("/", (req, res, next) => {
        res.json({
            "message": "Ok peliculas"
        })
    });
}


module.exports = peliculaModule;