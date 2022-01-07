import './App.css';
import BottomNote from './Components/BottomNote/BottomNote';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BottomNote />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
