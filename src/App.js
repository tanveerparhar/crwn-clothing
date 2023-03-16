import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.components";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  
  const Shop = () => {
    return <div>heyyyyyy</div>
  }
  
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigation/>}>
          <Route index={true} element={<Home/>}/>
          <Route path={"shop"} element={<Shop/>}/>
          <Route path={"sign-in"} element={<SignIn/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
