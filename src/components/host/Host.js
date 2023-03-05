function Host({ picture, name }) {
  return (
    <div>
      <img src={picture} alt="proprietaires" />
      <span>{name}</span>
    </div>
  );
}

export default Host;
