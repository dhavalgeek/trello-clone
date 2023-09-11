import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);  // '64fefbe1e8bb1fd5ad80'

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);