import { createContext, useMemo, useState, useContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {    
    setFavoriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  const value = useMemo(
    () => ({
      ids: favoriteMealIds,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
    }),
    [favoriteMealIds, removeFavorite, addFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
