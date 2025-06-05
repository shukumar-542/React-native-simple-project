import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: () => {},
});

function FavoriteContextProvider({ children }) {
    const [favoriteMealId , setFavoriteMealId] = useState([]);

    const addFavorite = (id)=>{
        setFavoriteMealId((currentFavIds) => [...currentFavIds , id])
    }

    const removeFavorite = (id)=>{
        setFavoriteMealId((currentFavIds) => currentFavIds.filter(favId => favId !== id))
    }  
    
    
    const value  = {
        ids : favoriteMealId,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite
    }
  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
export default FavoriteContextProvider;
