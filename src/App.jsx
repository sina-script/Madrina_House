import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [cardsList, setCardsList] = useState([
    {
      id: 1,
      title: "Aura Horizon",
      price: "1.400.000",
      image: "./../public/Images/house1.png",
      score: "4.8",
    },
    {
      id: 2,
      title: "Vespera Crest",
      price: "1.600.000",
      image: "./../public/Images/house2.png",
      score: "4.6",
    },
    {
      id: 3,
      title: "Elysian Ridge",
      price: "900.000",
      image: "./../public/Images/house3.png",
      score: "4.8",
    },
    {
      id: 4,
      title: "Solstice Peak",
      price: "1.300.000",
      image: "./../public/Images/house4.png",
      score: "",
    },
    {
      id: 5,
      title: "Novus Haven",
      price: "1.500.000",
      image: "./../public/Images/house5.png",
      score: "4.9",
    },
    {
      id: 6,
      title: "Zenith Noir",
      price: "1.100.000",
      image: "./../public/Images/house6.png",
      score: "4.6",
    },
  ]);

  const removeCard = (cardId) => {
    const newCardsList = cardsList.filter((card) => {
      return card.id != cardId;
    });

    setCardsList(newCardsList);
  };

  return (
    <div>
      <Header></Header>
      <main>
        {cardsList.map((card) => {
          return <Card key={card.id} {...card} removeCard={removeCard}></Card>;
        })}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
