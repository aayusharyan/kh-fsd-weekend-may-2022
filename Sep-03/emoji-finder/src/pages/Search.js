import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from '../data';
import Emojis from "../components/Emojis";

const Search = _ => {
  const [params] = useSearchParams();
  const [list, setList] = useState([]);

  useEffect(function() {
    const filter_query = params.get('q');

    const new_data = data.filter(element => {
      if(element.description.startsWith(filter_query)) {
        return true;
      }

      if(element.category.startsWith(filter_query)) {
        return true;
      }

      if(element.aliases.some((e) => e.startsWith(filter_query))) {
        return true;
      }


      return false;
    });
    setList(new_data);

  }, [params]);

  return (
    <>
      <Emojis data={list} />
    </>
  )
}

export default Search;