export function Stats({ items }) {
  if (!items.length) return <div className="stats">
    <em>You should start packing for the trip ✈️✈️</em>
  </div>;

  const numItems = items.length;
  const numPackedItems = items.filter((elem) => elem.packed).length;
  const packedPercent = numPackedItems / numItems * 100;
  return (
    <div className="stats">
      <em>{packedPercent === 100 ? "You are good to go.🌴✈️ Have a safe trip.✌️" :
        `You have ${numItems} total items, in which you have packed ${numPackedItems} items.(${packedPercent}%)`}</em>
    </div>
  );
}
