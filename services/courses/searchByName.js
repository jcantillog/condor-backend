var course = require('../../schemas/course');

exports.searchByName = function(req, res, next) {
    var limit = 6;
    var page = req.params.page || 1;

    course
        .find({})
        .skip((limit * page) - limit)
        .limit(limit)
        .exec(function(err, courses) {
            course.count().exec(function(err, count) {
                if (err) return next(err);
                res.send({
                    courses: courses,
                    currentPage: page,
                    pages: Math.ceil(count / limit)
                })
            })
        })
};