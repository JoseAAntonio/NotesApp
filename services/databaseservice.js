import { database} from './appwrite';

const databaseService = {
    //List Documents
    async ListDocuments(dbId, colId){
        try{
            const response = await database.listDocuments(dbId, colId);
            return response.documents || [];
        } catch (error) {
            console.error('Error fatching documents', error.message);
            return { error: error.message}
        }
    }
};


export default databaseService;