import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data.title))
  }, [])
  return (
    <div>
      <h1>External Users: </h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props){
  return (
    <div>
      <h2>User name: {props.name}</h2>
      <p>User email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  /* const handleCount = () => {
    const newCount = count + 1
    setCount(newCount);  
  } */
  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}



function Product(props){
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h5>Price: {props.price}</h5>
    </div>
  )
}

/* const products = [
  {name:"Mobile", price:"15000"},
  {name:"Laptop", price:"150000"},
  {name:"Watch", price:"1500"},
  {name:"Camera", price:"35000"},
  {name:"Shoe", price:"500"},
] */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}
<Product name="Mobile" price="15000"></Product>
<Product name="Mobile" price="15000"></Product>
<Product name="Mobile" price="15000"></Product>
<Product name="Mobile" price="15000"></Product>
<Product name="Mobile" price="15000"></Product> */

export default App;
