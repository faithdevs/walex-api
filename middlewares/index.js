const { check } = require("express-validator");

exports.validateRequest = () => [
  check("salary", "Monthly salary is required").not().isEmpty(),
  check("date", "Pay date is required").not().isEmpty(),
  check("ongoingLoan", "Ongoing loan is required").not().isEmpty().isBoolean(),
];
