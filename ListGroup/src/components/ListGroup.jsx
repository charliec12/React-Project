function ListGroup() {

    const items= [
        'London','Chicago','Brisbin','Angkor',
    ]

  return (
    <>
    <h1>List</h1>
    {items.length === 0 &&<p>No Items Found</p>}
      <ul className="list-group">
        {items.map(items=>
        <li 
        className="list-group-item" 
        key={items}
        onClick={()=>console.log(items,index)}>{items}
        </li>
        )}
      </ul>
    </>
  );
}

export default ListGroup;
