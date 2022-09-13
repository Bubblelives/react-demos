const Item = () => {
  let items = [
    {
      id: 1,
      name: "Card——购物卡片",
    },
    {
      id: 2,
      name: "",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <div>{item.name}</div>
        </li>
      ))}
    </>
  );
};

const List = () => {
  return (
    <ul>
      <Item />
    </ul>
  );
};

export default List;
