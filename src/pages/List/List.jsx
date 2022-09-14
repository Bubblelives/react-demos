const Item = () => {
  let items = [
    {
      id: 1,
      name: "Card——购物卡片",
      time: "2022-9-7",
    },
    {
      id: 2,
      name: "利用redux简易计算",
      time: "2022-9-14",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <li key={item.id} style={style}>
          <div>{item.name}</div>
          <div>{item.time}</div>
        </li>
      ))}
    </>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-around",
};

const List = () => {
  return (
    <ul>
      <Item />
    </ul>
  );
};

export default List;
