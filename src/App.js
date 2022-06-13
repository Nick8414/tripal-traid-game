import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Characters from "./pages/Characters";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Biography from "./pages/Biography";
import NotFound from "./pages/NotFound";

import { CHARACTER } from "./constants/heroesData";

import { CharactersContext } from "./context/charactersContetxt";

const App = () => {
  const [characters, setCharacters] = useState(CHARACTER);

  useEffect(()=>{
    const charactersData = localStorage.getItem("characters-list");
    if (charactersData) {
      setCharacters(JSON.parse(charactersData));
      return;
    }
    setCharacters(CHARACTER);
  }, [])

  useEffect(()=>{
    localStorage.setItem("characters-list", JSON.stringify(characters));
  },[characters])

  const handleLikeClick = (id) => {
    const newCharacterArr = characters.map((item) =>
      item.id === id ? { ...item, isLike: !item.isLike } : item
    );
    setCharacters(newCharacterArr);
  };

  return (
    <CharactersContext.Provider value={{characters, onLikeClick: handleLikeClick }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Biography />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CharactersContext.Provider>
  );
};

export default App;
export { CharactersContext };
