var Course = require('../../models/course');

exports.searchAll = async function (req, res, next) {
    const allCourses = await Course.find({});
    res.send(allCourses);
};