const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middleware/async");
const Contact = require("../models/ContactUs");

const createContactUs = asyncWrapper(async (req, res) => {
  const data = { ...req.body };
  const contact = await Contact.create(data);
  res.status(201).json({ contact });
});

module.exports = {
  createContactUs,
};
