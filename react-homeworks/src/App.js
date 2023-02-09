import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./pages/ChangePasswordForm/ChangePassword";
import Auction from "./pages/Auction/Auction";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound";
import PageProduct from "./pages/PageProduct/PageProduct";
import Resume from "./pages/Resume/Resume";
import TaskPage from "./pages/TaskPage/TaskPage";




function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<PageProduct />} />
            <Route path="todo-app" element={<TaskPage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="404" element={<PageNotFound />} />
            <Route path="auction" element={<Auction />} />
            <Route path="change_password" element={<ChangePassword />} />

      
        </Routes>

        </BrowserRouter>
     
    </>
  )
}

export default App;


