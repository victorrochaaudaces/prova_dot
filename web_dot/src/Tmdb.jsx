// api_key do tmdb
const API_KEY = "ed54110c526a34aebc1d8e6c5456d623";
// url base da api
const API_BASE = "https://api.themoviedb.org/3";

//  função basica de montagem da url
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getMovie: async () => {
    return [
      {
        slug: "movies",
        items: await basicFetch(
          `/discover/movie?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  API_KEY,
  API_BASE
};
