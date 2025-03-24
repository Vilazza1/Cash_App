import "./App.css";
import huluDisney from "./assets/Image.png";
import huluEspn from "./assets/Espn.png";
import logos from "./assets/Logos.png";

function App() {
  return (
    <>
      <div className="main">
        <header>
          <div className="header">
            <p>Log In</p>
          </div>
        </header>
        <div className="home">
          <div className="btn-container">
            <img src={huluDisney} />
            <img src={huluEspn} />
            <button>GET THEM BOTH</button>
            <button>GET ALL THREE</button>
          </div>
          <div className="info">
            <p id="of">All of these and more now streaming</p>
            <p id="in">
              The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu
              (With Ads). Terms Apply.
            </p>
          </div>
          <div className="logo">
            <img src={logos} />
            <p>View All Plan Options</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
