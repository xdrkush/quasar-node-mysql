/*
 * Import Module
 ****************/
const { sql } = require('drsql')

/*
 * Controller
 *************/

// Method Get
exports.get = async (req, res) => {
    console.log('Controller GET BOOK: ')

    // On recherche tout les users avec tout les attributs
    await sql.selectAll('books').then(data => {
        // On renvoie la réponse
        res.json({
            status: 200,
            listBook: data,
            message: "books lists retrieved successfully"
        })
    }).catch(err => console.log(err))
}

// Method Join with id
exports.getBookJoinUser = async (req, res) => {
    console.log('Controller getBookJoinUser: ', req.params.id)
    // Récupération des books en relation avec l'id de user = books.author_id
    // ('table1', 'table2', 'users.id', 'books.author_id', 2)
    await sql.joinWithID('users', 'books', 'users.id', 'books.author_id', req.params.id).then(data => {
        // On renvoie la réponse
        res.json({
            status: 200,
            listBook: data,
            message: "get Book join User successfully"
        })
    })
}

// Method Post ID
exports.create = async (req, res) => {
    console.log('Controller POST BOOK: ', req.body, req.query)
    // SQL pour creer un book
    // (title, description, author_id)
    await sql.insertInto('books', { ...req.body }).then(() => {
        if (req.query.join === 'true') {
            // On va rechercher les books en fonction de l'user du book ajouter (req.body.author_id)
            sql.joinWithID('users', 'books', 'users.id', 'books.author_id', req.body.author_id).then(data => {
                // On renvoie la réponse
                res.json({
                    status: 200,
                    listBook: data,
                    message: "Add Book successfully"
                })
            })
        } else {
            // On va rechercher tout les elements dans la table Books
            sql.selectAll('books').then(data => {
                // On renvoie la réponse
                res.json({
                    status: 200,
                    listBook: data,
                    message: "Add Book successfully"
                })
            })
        }
    }).catch(err => console.log(err))
}

// Method Delete One
// On veux supprimer un libvre et récupérer en réponse les livre de l'author du livre supprimer
exports.deleteOne = async (req, res) => {
    console.log('Controller DELETE BOOK: ', req.params, req.query)
    // author sera égale à { author_id: 1 }
    let authorID;
    // Récupération de l'author (id)
    await sql.selectOneByID('books', 'books.author_id', req.params.id).then(dataO => {
        Object.keys(dataO).forEach(key => authorID = dataO[key])

        // Supression de notre book
        sql.deleteByID('books', req.params.id).then(d => {
            if (req.query.join === 'true') {
                // On va rechercher les books en fonction de l'user du book ajouter (req.body.author_id)
                sql.joinWithID('users', 'books', 'users.id', 'books.author_id', authorID).then(data => {
                    // On renvoie la réponse
                    res.json({
                        status: 200,
                        listBook: data,
                        message: "Delete Book successfully"
                    })
                })
            } else {
                // On va rechercher tout les elements dans la table Books
                sql.selectAll('books').then(data => {
                    // On renvoie la réponse
                    res.json({
                        status: 200,
                        listBook: data,
                        message: "Delete Book successfully"
                    })
                })
            }
        })
    })

}