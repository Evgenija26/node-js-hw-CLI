const contacts = require("./contacts");


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContact = await contacts.listContacts();
      return console.log(allContact);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
       const addContact = await contacts.addContact(name, email, phone);
      return console.log(addContact);;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);;

    default:
      console.log("Unknown action type!");
  }
}

invokeAction ({action: "list"});
invokeAction ({action: "get", id: "5"});
invokeAction ({action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22"});
invokeAction ({action: "remove", id: "3"});