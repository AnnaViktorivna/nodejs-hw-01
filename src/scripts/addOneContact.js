import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  contacts.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
};
console.log('Add one contact');
await addOneContact();
