import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('662dbefd0029e8eea0ab');

export const account = new Account(client);
export { ID } from 'appwrite';
