import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
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
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
