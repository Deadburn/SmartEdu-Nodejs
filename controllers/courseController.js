const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      course,
    });
    // res.send("Yeni Kurs Oluşturuldu.")
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error,
    });
  }
};
