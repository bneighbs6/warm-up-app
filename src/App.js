import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import WarmUpGenerator from './components/WarmUpGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <WarmUpGenerator />
      <Footer />
    </div>
  );
}

export default App;
