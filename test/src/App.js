
import './App.css';
import Input from './component/input';
import Product from './component/product';
import { data } from './data';

function App() {
var changeSate = (value) => {
    // console.log(event.target.value);
    this.setState(
        {
            input: value
        }
    )
}
  var callbackFunction = (childData) => {
    this.setState({message: childData})
}
  console.log(data)
  return (
    <div className="App">
      <Input/>
      <Product/>
    </div>
  );
}

export default App;
