import './App.css';
import NavBarElectro from './components/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBarElectro></NavBarElectro>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
