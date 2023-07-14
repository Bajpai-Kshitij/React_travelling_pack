import { useState } from "react";
import {Logo} from './Logo'
import { Stats } from "./Stats";
import {Form} from "./Form"
import {PackingList} from "./PackagingList"

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

  function handleClearList(){
    setItems([])
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDelete} onCheckedItem={handleChecked} onClearList={handleClearList} />
      <Stats items={items}/>
    </div>
  );
}






