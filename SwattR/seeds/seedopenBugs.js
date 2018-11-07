// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync({force:true}).then(function () {
    db.openBugs.bulkCreate([{

        title: 'broken code',
        description: "my code is broken",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 10,
        user: 'bob',
        dueDate: '10/10/2020',
        postDate: '11/6/18'

    }, {

        title: 'broken javascript',
        description: "my javascript is broken",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 50,
        user: 'jill',
        dueDate: '10/10/2020',
        postDate: '11/6/18'

    },

    {

        title: 'broken code 1',
        description: "my code is broken 1",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 10,
        user: 'greg',
        dueDate: '10/10/2020',
        postDate: '11/6/18'
    }, {

        title: 'broken javascript 1',
        description: "my javascript is broken",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 50,
        user: 'dillon',
        dueDate: '10/10/2020',
        postDate: '11/6/18'


    },
    {

        title: 'broken code 2',
        description: "my code is broken",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 10,
        user: 'sam',
        dueDate: '10/10/2020',
        postDate: '11/6/18'
    }, {

        title: 'broken javascript 2',
        description: "my javascript is broken",
        link: "https://github.com/ajfleck13/Project-Verat.git",
        pay: '$' + 50,
        user: 'tim',
        dueDate: '10/10/2020',
        postDate: '11/6/18'


    }



    ]).then(function () {
        console.log('Data successfully added!');
    }).catch(function (error) {
        console.log('Error', error)
    });
});