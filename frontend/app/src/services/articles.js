import axios from "axios";

/**
 * Call the Strapi api for blog pots
 * @func getArticles
 * */
export const getArticles = async () => {
  const result = await axios
    .get(`${process.env.API_URL}/posts`) 
    .then(response => {
      if (response.status === 200) { //To be extra safe
        return response;
      }
    })
    .catch(error => {
      return { error: error };
    });
  return result;
};