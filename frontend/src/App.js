import { Link, Route , Routes} from "react-router-dom";
import PageNotFound from "./errorhandle/PageNotFound";
import Crashcourses from "./home/Crashcourses";
import Statussection from "./home/Statussection";
import Login from "./User/Login";

function App() {
  return (
    <div className="App mx-10">
      <div className="py-2 grid grid-cols-2 gap-10">
        <div>
           <p className="text-4xl font-bold">Lear<span className=" text-five">ner</span></p>
        </div>
        <div className="flex  space-x-10 flex-row justify-end items-center text-xl">
            <div>
               <Link to="/">Home</Link>
            </div>
            <div>
               <Link to="/login">Login</Link>
            </div>
        </div>
      </div>
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
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
