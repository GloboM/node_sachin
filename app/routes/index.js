
const h = require('../helpers');

module.exports = () => {

    let routes = {
        'get': {
            '/': (req,res,next) => {
                res.render('login');
            },
            '/rooms': (req, res, next) => {
                res.render('rooms');
            },
            '/chat': (req, res, next) => {
                res.render('chatroom');
            }
        },
        'post': {

        }
    }


    // iterate through the routes objetcts and add them to the main express router



    return h.route(routes);
}