import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Handkerchiefs", quantity: 3, packed: false },
  { id: 4, description: "Maggie", quantity: 18, packed: false },
  { id: 5, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items,setItems] = useState([])

  function handleAddItems(item){
    setItems((items) => [...items,item])
  }

  function handleDelete(id){
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleChecked(id){
    setItems((items) => items.map((item) => item.id === id ? {...item,packed : !item.packed} : item))
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDelete} onCheckedItem={handleChecked} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴🌴 Far Away Home 💼</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("")
  const [count,setCount] = useState(1)

  function handleSubmit(e){
    e.preventDefault()

    if(e.target[1].value != ""){
      const newItem = {description,quantity:count,id:Date.now(),packed:false}
      onAddItems(newItem)
    }

    setDescription("")
    setCount(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to bring to your 😍 trip?</h3>
      <select value={count} onChange={(e) => setCount((_) =>Number(e.target.value))}>
        {Array.from({length:20}, (_,i)=>i+1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Items.." value={description} onChange={(e) => setDescription((_) => e.target.value)}></input>
      <button >Add</button>
    </form>
  )
}

function PackingList({items,onDeleteItem,onCheckedItem}) {

  return(
    <div className="list">
      <ul>
        {items.map(item => <Item item = {item} onDeleteItem={onDeleteItem} onCheckedItem={onCheckedItem} key={item.id}/>)}
      </ul>
    </div>
  )
}

function Item({item,onDeleteItem,onCheckedItem}){

  return (
    <li>
      <input type="checkbox" value={item.packed} onClick={()=>onCheckedItem(item.id)} />
      <span style={item.packed ? {textDecoration:"line-through"}:{}}>
      {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>This is a custom stats will add later another text</em>
    </footer>
  )
}
