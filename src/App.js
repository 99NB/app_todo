import { useState , useEffect} from 'react';
import './App.css';

function App() {
const [newItem, setNewItem]=useState("");
const [items,setItems]= useState([]);


useEffect(() => {
  if (localStorage.getItem("yapilacaklar") === null) {
    localStorage.setItem("yapilacaklar", JSON.stringify([]));
  } else {
    setItems(JSON.parse(localStorage.getItem("yapilacaklar")));
  }
}, []);

useEffect(() => {
  localStorage.setItem("yapilacaklar", JSON.stringify(items));
}, [items]);



function addItem(){

if(!newItem ){
  alert("enter an item");
  return;

}
  const item= {
    id:Math.floor(Math.random()*1000),
    value:newItem
  }

  
  setItems(oldItems=>[...oldItems,item])
  setNewItem("");

  
}

function deleteItem(id){
  const newArray=items.filter(item=>item.id!==id);
  setItems(newArray);

}



  return (
    <div className="App">
     <h1>Todo List App</h1>

     <input type="text" placeholder="add an items..." value={newItem} onChange={e=>setNewItem(e.target.value)}/>
     <button onClick={()=>addItem()}>Add </button>
 <ul>
   {items.map(item=>{
    return(
      <li key={item.id}>{item.value} 
      <button onClick={()=>deleteItem(item.id)}>Sil</button>
      </li>
    )
    })}
 </ul>

    </div>
  );
}

export default App;
