const express = require('express');
const routes = express.Router();
const mysqlDB = require('../../databases');


routes.get('/sign-In', (req, res) => {
    res.render('signIn.html', {
        title: 'Sign In'
    });
});

routes.get('/sign-Up', (req, res) => {
    res.render('signUp.html', {
        title: 'Sign Up'
    });
});

routes.get('/', (req, res) => {
    // employeesModel
    // .getEmployees()
    // .then(employees => {
    //     res.render('index.html', {
    //         title: 'Principal',
    //         employees: employees
    //     });
    // });
    // mysqlDB.query('SELECT * FROM employees', (err, rows, field) => {
    //     if(!err) {
    //         res.render('index.html', {
    //             title: 'Principal',
    //             employees: rows
    //         });
    //         console.log(rows);
    //     }
    // });

    res.render('signIn.html', {
        title: 'Sign In',
    });
});

routes.get('/datos-personales', (req, res) => {
    res.render('datos.html', {
        title: 'Datos del doctor(a)'
    });
});

routes.get('/citas', (req, res) => {
    res.render('citas.html', {
        title: 'Agendar cita'
    });
});

routes.post('/add', (req, res) => {
    // const nombre = req.body.nombre;
    // const salario = req.body.salario;
    // if(!nombre || !salario) {
    //     return res.status(500).send("No hay datos");
    // }

    // employeesModel
    // .insertEmployee(nombre, salario)
    // .then(employee => {
    //     res.redirect('/citas');
    // })
    // .catch(err => {
    //     return res.status(500).send("Error insertando datos");
    // });

    const {nombre, salario} = req.body;

    if(!nombre || !salario) {
        res.status(500).send('No hay datos');
    } else {
        mysqlDB.query('INSERT INTO employees (name, salary) values (?, ?)', [nombre, salario], (err, rows, field) => {
            if(!err) {
                res.redirect('/citas');
                console.log('Datos almacenados');
            } else {
                console.log('Hubo un error');
            }
        });
    }
});

routes.get('/crear-pago', (req, res) => {
    res.render('pagos.html', {
        title: 'Crear pago'
    });
});
// ID_PACIENTE
// CUANTO DEBE
// PAGO TOTAL
// Pago al momento 

module.exports = routes;