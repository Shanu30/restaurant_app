import "./App.css";
import { restaurants } from "./getStaticData";
import ResCard from "./component/res-card/ResCard.jsx";
import Header from "./component/header/Header.jsx";
function App() {
  return (
    <>
    <Header/>
      <div className="card-container">
        {restaurants.map((item) => {
          return <ResCard restaurant={item} />;
        })}
      </div>
    </>
  );
}

export default App;
