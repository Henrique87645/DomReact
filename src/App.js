import Banner from "./components/Banner";
import Card from "./components/Card";
import Category, {categorias, filterCategory} from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {  
   
  return (
  <>
    <Header />
    <Banner image="favoritos" />
    <Container>
      {categorias.map((category, index) =>
    <Category category={category}>
      {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
    </Category>)}
    </Container>
    <Footer />
  </>
  );
}

export default App;
