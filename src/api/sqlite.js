import axios from "axios";

const PORT = process.env.PORT || 3001;

export const fetchUsersFromDB = async () => {
  try {
    const response = await axios.get("http://localhost:" + PORT + "/users");
    return response.data.data; // Retourne directement les données
  } catch (error) {
    console.error("An error occurred in sqlite.js:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};
