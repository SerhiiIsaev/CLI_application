const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");


const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
        const allContacts = await listContacts();
        console.table(allContacts);
        break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact)
      break;

    case "add":
      const newContact = await addContact(name, email, phone)
      console.log("New contact added!", newContact)
      break;

    case "remove":
      const removedContact = await removeContact(id)
      console.log("This contact is removed!", removedContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
