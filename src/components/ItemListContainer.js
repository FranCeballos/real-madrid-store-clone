// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div>
      {/* <h1 className="tituloSeccion">{props.greeting}</h1> */}
      {/* <ItemCount inicial={1} stock={8} /> */}
      <ItemList itemData={props.itemData} />
    </div>
  );
};

export default ItemListContainer;
