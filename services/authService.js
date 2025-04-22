import { account } from "./authService";
import { ID } from "react-native-appwrite";

const authService = {
  // Register user
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Registration failed, Please try again",
      };
    }
  },

  //Login
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Login failed, check your credentials",
      };
    }
  },

  //Get logged in user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  //Logout user
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout failed",
      };
    }
  },
};


export default authService;