// function List(){
//     // const fruits = ["apple", "Orange", "Banana", "Coconut"];
//     // const listItems = fruits.map(fruit => <li>{fruit}</li>);
//     // return(<ol>{listItems}</ol>);   //simple list


//     const fruits = [{id:1,name:"Apple", calories:95},
//                     {id:2, name:"Banana", calories:50}, 
//                     {id:3, name:"Coconut", calories:100},
//                     {id:4, name:"Pineapple", calories:90}];  //Array of objects
//     //fruits.sort((a,b) => a.name.localeCompare(b.name));  //Alphabetical order
//     fruits.sort((a,b) => b.name.localeCompare(a.name));
//     const listItems = fruits.map(fruit => 
//                         <li key={fruit.id}>
//                         {fruit.name}: &nbsp;
//                         <b>{fruit.calories}</b></li>);
   
//    return(<ol>{listItems}</ol>);
// }
// export default List

function List(props){
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.colories}</b></li>)

            return(<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
                </>)
}
export default List