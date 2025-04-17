import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

//Appwrite database and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  //Get Notes
  async getNotes() {
    const response = await databaseService.ListDocuments(dbId, colId);
    if (response.error) {
      return { error: response.error };
    }
    return { data: response };
  },
  // Add new notes
  async addNote(text) {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const data = {
      text: text,
      createdAt: new Date().toISOString(),
    };

    const response = await databaseService.createDocument(
      dbId,
      colId,
      data,
      ID.unique()
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },
  // Delet notes
  async deleteNote(id) {
    const response = await databaseService.deleteDocument(dbId,colId, id)
    if (response?.error){
        return { error: response.error}  
    }

    return { succsess: true};
  }
};

export default noteService;
