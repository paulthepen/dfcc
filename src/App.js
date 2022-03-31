import "./App.css";
import { Content, Sidebar, Container, Footer, Header } from "rsuite";

function App() {
  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="container-fluid">
      <Header>
        <div className="text-center">
          <h1>Command Center</h1>
        </div>
      </Header>
      <Content></Content>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
