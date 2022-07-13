import "./App.css";
import { useEffect } from "react";
import { getUsers } from "./features/ProfilePage/userSlice";
import { AllRoutes } from "./routes/AllRoutes/Routes";
import {useDispatch, useSelector} from "react-redux";


function App() {
  const dispatch = useDispatch();
  const {token} = useSelector(store => store?.auth)
  
  useEffect(() => {
    if(token) {
      dispatch(getUsers());
    }
  }, [token])

  return (
    <div className="App bg-slate-100 min-h-screen">
      <AllRoutes />
    </div>
  );
}

export default App;
