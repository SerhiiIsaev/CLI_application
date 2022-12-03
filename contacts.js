const fs = require("fs/promises");
const path = require("path");
const { string } = require("yargs");


const contactsPath = path.resolve("db/contacts.json");

async function listContacts () {
  const data = await fs.readFile(contactsPath, "utf8")
  return JSON.parse(data)
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId.toString());
  return result
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone,
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}