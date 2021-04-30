const { Router } = require("express");
const { validationResult } = require("express-validator");
const { validateRequest } = require("../middlewares");

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Welcome to Walex backend api" });
});

router.post("/process", validateRequest(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  const { salary, date, ongoingLoan } = req.body;
  const interestRate = 0.4;
  const interestAmount = salary * interestRate;
  const interest = interestAmount * date;
  const repayment = (salary + interest) / date;
  return res.json({ repayment });
});

module.exports = router;
