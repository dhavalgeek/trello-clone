import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
	if (!file) return;

	const fileUploaded = await storage.createFile(
		"64feffdf9b91c9d4f3ee",
		ID.unique(),
		file
	);

	return fileUploaded;
};

export default uploadImage;
