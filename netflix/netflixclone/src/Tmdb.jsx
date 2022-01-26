// api_key do tmdb
const API_KEY = "ed54110c526a34aebc1d8e6c5456d623";
// url base da api
const API_BASE = "https://api.themoviedb.org/3";

// - originais da netflix
// - recomendados
// - em alta (top rated)
// - ação
// - comedia
// - terror
// - romance
// - documentários

// função basica de mopntagtem da url
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      // um array com as listas separadas
      {
        slug: "originais",
        title: "Originais Netflix",
        // colocamos o resto da url como props de endpoint para a função
        // colocamos o languade=pt-BR para trazer as informações em portugues
        // temos sempre que passar a api_key para validarmos nossa chave da api
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with-genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with-genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with-genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with-genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with-genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },
};
