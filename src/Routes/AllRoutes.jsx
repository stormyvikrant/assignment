import { Routes, Route, Link } from "react-router-dom"
import Home from "../Routes/Home"
import Login from "../Routes/Login"
import Dashboard from "../Routes/Dashboard"
import RestaurantPage from "./RestaurantPage"
import PrivateRoute from "../Components/PrivateRoute"


function AllRoutes() {
  return (
    <div>

      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/login" element={< Login />}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
        <Route path="/restaurants/:id" element={
          <PrivateRoute>
            <RestaurantPage />
          </PrivateRoute>
        }></Route>
      </Routes>

    </div>
  );
}

export default AllRoutes;
