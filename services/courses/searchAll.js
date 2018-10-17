var course = require('../../schemas/course');

exports.searchAll = async function (req, res, next) {
    const allCourses = await course.find({});
    res.send(allCourses);
};