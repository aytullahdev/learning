import { Route , Routes} from "react-router-dom";
import Crashcourses from "./home/Crashcourses";
import Statussection from "./home/Statussection";
import Login from "./User/Login";

function App() {
  return (
    <div className="App mx-10">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Crashcourses />
              <Statussection />
            </>
          }
        />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
