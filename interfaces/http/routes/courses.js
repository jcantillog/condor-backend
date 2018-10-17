var express = require('express');
var router = express.Router();

var { coursesServices } = require('../../../services');

/* GET courses listing. */
router.get('/', function(req, res, next) {
    try {
        coursesServices.searchAllCourses(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('/:name/:page', function(req, res, next) {
    try {
        coursesServices.searchCoursesByName(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;
