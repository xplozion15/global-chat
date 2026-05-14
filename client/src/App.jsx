import { Homepage } from "./components/Homepage/Homepage";
import "./index.css";

function App() {
  const isUserLoggedin = true;

  return (
    <>
      {isUserLoggedin ? (
        <Homepage />
      ) : (
        <div>
          <h1>Global chat</h1>
          <a href="/login">Get started!</a>
        </div>
      )}
    </>
  );
}

export default App;
