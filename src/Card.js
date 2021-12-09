const Card = ({ data }) => {
  const { name, age, image } = data;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={name} width="100px" height="100px"/>
      </div>
      <div className='card-text'>
        <h1>{name}</h1>
        <h3>{`${age} years`}</h3>
      </div>
    </div>
  );
};
export default Card;
