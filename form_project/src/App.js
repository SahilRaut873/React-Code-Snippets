import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormikForm from "./Component/Formik_Form";
import HomePage from "./Component/HomePage";
import ListPage from "./Component/ListPage";
import Header from "./Component/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<ListPage/>}></Route>
      <Route path="student" element={<ListPage/>}></Route>
      <Route path='/add-student' element={<FormikForm/>}></Route>
    </Routes>
    {/* <ListPage/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
