import { useContext } from "react";
import NoveltyProvider from "../context/NoveltyProvider";


const useNovelty = () => {
  return useContext(NoveltyProvider);
}

export default useNovelty;