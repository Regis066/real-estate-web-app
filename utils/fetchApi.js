import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "272de9dff0msh497d328b5eb4fbep1aa9a1jsn5613613d14c2",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
    
    return data;
};
