const fs = require ("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json")

const listContacts = async() =>{
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    console.log("List of contacts: ");
    console.table(contacts);
}

const getContactById = async(id) =>{
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);

    const contact = contacts.find(item => item.id === id);
    console.log(`Get contact by ID ${id}:`);
    console.table(contact);
    return contact || null;
}

const addContact = async (name, email, phone) => {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    contacts.push({
        id: contacts.length + 1,
        name: name,
        email: email,
        phone: phone,
      });
    }

const removeContact = async (contactId) => {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);

    const newContact = contacts.filter((contact) => contact.id !== contactId);
    console.log("Contact deleted successfully! New list of contacts: ");
    console.table(newContact);

}

const updateContact = async(id, {name, email, phone}) => {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
  
  const contact = contacts.find(item => item.id === id);
  if(contact === -1){
      return null;
  }
  contacts[contact] = {id, name, email, phone};
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  
  console.log("Contact update successfully!");
  console.log(contacts[contact])

}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
}