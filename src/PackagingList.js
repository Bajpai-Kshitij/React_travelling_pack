import { useState } from "react";
import { Item } from "./Item";

export function PackingList({items,onDeleteItem,onCheckedItem,onClearList}) {

    const [sortBy,setSortBy] = useState("input")
    let sortedList =[];
    function handleSortingOrder (order){
      setSortBy(order)
    }
    if(sortBy === "input") sortedList = items
    else if(sortBy === "description") sortedList = items.slice().sort((a,b) => a.description.localeCompare(b.description))
    else if(sortBy === "packed") sortedList = items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    else if(sortBy === "count") sortedList = items.slice().sort((a,b) => Number(a.quantity)-Number(b.quantity))
    return(
      <div className="list">
        <ul>
          {sortedList.map(item => <Item item = {item} onDeleteItem={onDeleteItem} onCheckedItem={onCheckedItem} key={item.id}/>)}
        </ul>
        <div className="actions">
          <select value ={sortBy} onChange={(e) =>handleSortingOrder(e.target.value) }>
            <option value="input">Sort by input</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packing status</option>
            <option value="count">Sort by item count</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    )
  }
  
