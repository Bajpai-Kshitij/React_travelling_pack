import { useState } from "react" 

export function Form({onAddItems}) {
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
  