import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './main.css';


function App()
{
  return (
    <div>
      Hola, mundo
      <Navbar />
      <ItemListContainer />

      {/* en la siguiente modificacion voy hacer que la lista de abajo de pueda ver cuando haga click en ver mas de un producto haber que show  */}
      <h4>en la siguiente modificacion voy hacer que la lista de abajo de pueda ver cuando haga click en ver mas de un producto haber que show</h4>

      <ItemDetailContainer itemId={2}/>
    </div>
  )
}

export default App;