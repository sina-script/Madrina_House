import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Card image="./../public/Images/house1.png"></Card>
        <Card image="./../public/Images/house2.png"></Card>
        <Card image="./../public/Images/house3.png"></Card>
        <Card image="./../public/Images/house4.png"></Card>
        <Card image="./../public/Images/house5.png"></Card>
        <Card image="./../public/Images/house6.png"></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
