const express = require("express");
const router = express.Router();
const { contactsController } = require("../../controller/index");
const { validateContact } = require("../../middlewares/validation");

router
  .get("/", contactsController.listContacts)
  .post("/", validateContact, contactsController.addContact);

router
  .get("/:contactId", contactsController.getById)
  .delete("/:contactId", contactsController.removeContact)
  .patch("/:contactId", validateContact, contactsController.updateContact);

module.exports = router;
