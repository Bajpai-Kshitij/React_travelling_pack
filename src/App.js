import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Handkerchiefs", quantity: 3, packed: false },
  { id: 4, description: "Maggie", quantity: 18, packed: false },
  { id: 5, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴🌴 Far Away Home 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("")
  const [count,setCount] = useState(1)
  function handleSubmit(e){
    e.preventDefault()

    if(e.target[1].value != ""){
      const newItem = {description,quantity:count,id:Date.now(),packed:false}
      initialItems.push(newItem)
      console.log(initialItems)
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

function PackingList() {
  return(
    <div className="list">
      <ul>
        {initialItems.map(item => <Item {...item} key={item.id}/>)}
      </ul>
    </div>
  )
}

function Item({id,description,quantity,packed}){
  const [isPacked,setPacked] = useState(packed);

  function handlePacking (){
    initialItems[id-1].packed = !isPacked;
    setPacked((key) => !key);
    console.log(initialItems)
  }

  return (
    <li>
      <span style={isPacked ? {textDecoration:"line-through"}:{}}>
      {quantity} {description}
      </span>
      <button onClick={handlePacking}>❌</button>
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
