require('dotenv').config({ path: __dirname + '/../../.env' });
const express = require("express");
const handlebars = require("express-handlebars");
const path = require('path')
const cookieParser = require("cookie-parser");
const paginate = require('handlebars-paginate');
const flash = require('express-flash')
const session = require('express-session')
const csurf = require('csurf')
const routes = require('./routes/routes')

class App {
    constructor() {
        this.express = express()
        this.session()
        this.middliwares()
        this.flash()
        this.engine()
        this.routes()
    }
    session() {
        this.express.use(session({
            secret: process.env.SECRETKEY_SESSION || 'somesecrettoken',
            resave: true,
            saveUninitialized: true
        }))
    }
    flash() {
        this.express.use(flash())
        this.express.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.message = req.flash('message')
            res.locals.error = req.flash('error')
            next()
        })
    }
    middliwares() {
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(express.json())
        this.express.use(cookieParser());
        this.express.use(express.static('./src/public'))
            /*  this.express.use(csurf()) */
    }
    engine() {
        this.express.set('view engine', '.hbs', )
        this.express.set("views", path.join(__dirname, "/views/"))
        console.log(path.join(__dirname, "/views/"))
        this.express.engine('.hbs', handlebars({
            defaultLayout: 'main',
            extname: '.hbs',
            helpers: {
                dinheiro: function(value) {
                    if (value) {
                        return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                    return
                },
                birthdate: function(value) {
                    if (value) {
                        return value.split('T')[0]
                    }
                },
                base_api: function() {
                    return process.env.API_BASE_URL
                },
                ifEquals: function(arg1, arg2, options) {
                    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
                },
                calculatePromotion: function(porcent, valueProduct) {
                    return (Number(valueProduct) - ((Number(valueProduct) * Number(porcent / 100))))
                },
                smaller_equals: function(stock, minimumStock, products) {
                    return (stock <= minimumStock) ? products.fn(this) : false;
                },
                dividir: function(valueTotal, quantity) {
                    return (Number(valueTotal) / Number(quantity)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                },
                trataData: function(value) {
                    const formataHora = (Hora) => Hora < 10 ? '0' + Hora : Hora
                    let data = new Date(value)
                    let dia = data.getDate()
                    let mes = data.getMonth()
                    let ano = data.getFullYear()
                    return `${formataHora(dia)}/${formataHora(mes + 1)}/${ano}`
                },
                unique: function(array, opt) {
                    function unique(array, propertyName) {
                        return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
                    }
                    let data = unique(array, 'tag')
                    var results = '';
                    data.forEach((item) => {
                        results += opt.fn(item);
                    });
                    return results;

                },
                paginate: paginate
            }
        }))
    }
    routes() {
        this.express.use(routes)
    }
}


module.exports = new App().express