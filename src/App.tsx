import { MainRouter } from "./routes/MainRouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/App.scss";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="app__main">
          <MainRouter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
