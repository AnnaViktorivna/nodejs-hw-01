import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i += 1) {
    contacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
  }
  console.log(contacts);
};

await generateContacts(5);

console.log('Contacts generated!');
