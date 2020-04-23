import React from "react";
import Layout from "./components/Layout";
import Sidebar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Layout>
      <Sidebar />
      <MainContent />
    </Layout>
  );
}

export default App;
