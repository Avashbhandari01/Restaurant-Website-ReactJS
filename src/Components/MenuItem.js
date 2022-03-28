function MenuItem({ name, description, price }) {
  return (
    <div className="menuItem">
      <div className="nameDesc">
      <p>{name}</p>
      <p>{description}</p>
      </div>
      <div className="price"><p>{price}</p></div>
    </div>
  );
}

export default MenuItem;