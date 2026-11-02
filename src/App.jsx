import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import "./App.css";

function App() {

  const cardsList=[
    {title:"Aura Horizon",price:"1.400.000",image:"./../public/Images/house1.png"},
    {title:"Vespera Crest",price:"1.600.000",image:"./../public/Images/house2.png"},
    {title:"Elysian Ridge",price:"900.000",image:"./../public/Images/house3.png"},
    {title:"Solstice Peak",price:"1.300.000",image:"./../public/Images/house4.png"},
    {title:"Novus Haven",price:"1.500.000",image:"./../public/Images/house5.png"},
    {title:"Zenith Noir",price:"1.100.000",image:"./../public/Images/house6.png"}
  ]

  return (
    <div>
      <Header></Header>
      <main>
        <Card {...cardsList[0]}></Card>
        <Card {...cardsList[1]}></Card>
        <Card {...cardsList[2]}></Card>
        <Card {...cardsList[3]}></Card>
        <Card {...cardsList[4]}></Card>
        <Card {...cardsList[5]}></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
