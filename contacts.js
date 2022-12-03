const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

async function listContacts () {
  const data = await fs.readFile(contactsPath, "utf8")
  return JSON.parse(data)
}

async function getContactById(contactId) {
  // ...твій код
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}