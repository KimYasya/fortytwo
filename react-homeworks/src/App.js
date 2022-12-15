import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      
        </Routes>

        </BrowserRouter>
     
    </>
  )
}

export default App;


