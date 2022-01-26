import { useEffect } from "react";
import Tmdb from "./Tmdb";

function APP() {

  useEffect(()=> {
    // colocamos função asyn para esperar o resultado e evitar erros noi console
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      console.log(list)
    }

    loadAll();
  }, [])

  return <div>Olá mundo!</div>;
}

export default APP;
