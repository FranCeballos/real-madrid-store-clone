import "./Item.css";

const Item = (props) => {
  return (
    <div className="itemCard">
      <div>
        <img className="itemImage" src={props.pictureUrl} alt={props.title} />
      </div>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Item;
