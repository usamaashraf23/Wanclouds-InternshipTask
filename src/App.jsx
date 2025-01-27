import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import SideBar from "./components/SideBar";
import DisplayFormData from "./components/DisplayFormData";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Form />} />
          <Route path="/form-data" element={<DisplayFormData />} />
        </Route>
      </Routes>
      {/* <SideBar /> */}
      {/* <Form />
      <DisplayFormData /> */}
      <Footer />
    </>
  );
}

export default App;
