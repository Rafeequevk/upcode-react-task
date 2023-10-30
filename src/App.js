import Header from './components/Header';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <Header title="new Header"/>
   <NavigationBar/>
   <Content/>
   <Footer/>
    </div>
  );
}

export default App;
