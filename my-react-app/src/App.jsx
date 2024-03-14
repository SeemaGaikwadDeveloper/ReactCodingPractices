import Header from './Header.jsx'
import Footer from './Footer.jsx'
//import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App(){
  const fruits = [{id:1,name:"Apple", calories:95},
                      {id:2, name:"Banana", calories:50}, 
                      {id:3, name:"Coconut", calories:100},
                      {id:4, name:"Pineapple", calories:90}];  //Array of objects

  const vegetables = [{id:5,name:"Potato", calories:95},
                      {id:6, name:"Tomato", calories:50}, 
                      {id:7, name:"Corn", calories:100},
                      {id:8, name:"Brocolli", calories:90}];  //Array of objects
    

  return(
    <>
    <Header></Header>
    <Button/>
    <Card/>
   {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null} 
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null} 
    {/* <List/> */}
    {/* <Student name="Sima" age={26} isStudent={true}/> */}
    {/* <Student name="Bunny" age={29} isStudent={true}/> */}
    {/* <Student isLoggedIn={true} username="Shubham"></Student>   */}
    <Student/>
    <MyComponent/>
    <Counter/>
    <Footer></Footer>
  </>
  );
}

export default App