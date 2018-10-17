var Course = require('../../models/course');

exports.searchByName = function(req, res, next) {
    var limit = 6;
    var page = req.params.page || 1;
    var name = req.params.name;

    Course
        .find({name: { $regex: '.*' + name + '.*', $options: 'i' }})
        .skip((limit * page) - limit)
        .limit(limit)
        .exec(function(err, courses) {
            Course.countDocuments().exec(function(err, count) {
                if (err) return next(err);
                res.send({
                    courses: courses,
                    currentPage: page,
                    pages: Math.ceil(count / limit)
                })
            })
        })
};