const fs = require("fs/promises");
const { Module } = require("module");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");


// TODO: задокументувати кожну функцію
const listContacts = async() => {
    const data = await fs.readFile(contactsPath)
    return JSON.parse(data)
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

Module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}