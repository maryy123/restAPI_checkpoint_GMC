import './App.css';
import Footer from './Components/Footer';
import Navbarr from './Components/Navbarr';
import { Switch,Route} from "react-router-dom"
import Home from './Pages/Home';
import AddContact from './Pages/AddContact';
import Error from './Pages/Error';
import ContactsList from './Pages/ContactsList';


function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path={["/addcontact", `/editContact/:id`]} component={AddContact}/>
        <Route path="/contacts" component={ContactsList}/>
        <Route path="/*" component={Error}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
