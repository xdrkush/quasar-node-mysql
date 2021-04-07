/*
 * Import Module
 ****************/

const { use } = require("./router");

/*
 * Controller
 *************/
module.exports = {
    getBookJoinUser: (req, res) => {
        // Récupération des books en relation avec l'id de user = books.author_id
        let sql = `SELECT users.name, books.title, books.description, books.id
                   FROM users
                   LEFT OUTER JOIN books
                   ON users.id = books.author_id 
                   WHERE users.id = ${parseInt(req.params.id)} ;`

        console.log(req.params.id)

        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                listBook: data,
                message: "get Book join User successfully"
            })
        })
    },
    // Method Post
    post: async (req, res) => {
        let sql = `INSERT INTO books (title,description,author_id) values(?)`;
        let values = [
            req.body.title,
            req.body.description,
            req.body.author_id
        ];
        console.log(req.body)
        db.query(sql, [values], function (err, data, fields) {
            if (err) throw err;
            let sql = `SELECT users.name, books.title, books.description, books.id
                       FROM users
                       LEFT OUTER JOIN books
                       ON users.id = books.author_id 
                       WHERE users.id = ${parseInt(req.body.author_id)} ;`;

            db.query(sql, (error, dataRes, fields) => {
                if (error) throw error;
                res.json({
                    status: 200,
                    listBook: dataRes,
                    message: "Add Book successfully"
                })
            })
        })
    },
    // Method Delete One
    deleteOne: (req, res) => {
        let author;
        let sqlResult = `SELECT books.author_id
                         FROM books
                         WHERE books.id = ${parseInt(req.params.id)} ;`;

        db.query(sqlResult, (errResult, result) => {
            if (errResult) throw errResult;

            Object
                .keys(result)
                .forEach(function (key) {
                    var row = result[key];
                    author = row.author_id
                })

            let sqlDel = `DELETE FROM books WHERE id = ${parseInt(req.params.id)}`;
            db.query(sqlDel, function (errDel) {
                if (errDel) throw errDel;

                let sql = `SELECT users.name, books.title, books.description, books.id
                           FROM users
                           LEFT OUTER JOIN books
                           ON users.id = books.author_id 
                           WHERE users.id = ${parseInt(author)};`;
                           
                db.query(sql, (err, data) => {
                    if (err) throw err;
                    res.json({
                        status: 200,
                        listBook: data,
                        message: "Delete Book successfully"
                    })
                })
            })

        })

    }
}
