import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className="tituloSeccion">{props.greeting}</h1>
      <ItemCount inicial={1} stock={8} />
    </div>
  );
};

export default ItemListContainer;
