import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
  <>
    <Header/>
  <Banner image="favoritos" />
    <Container>
      <h1>testes</h1>
      <p>testando o react</p>
    </Container>
    <Footer/>
  </>
  );
}

export default App;
