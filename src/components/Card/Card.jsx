import React, { useEffect, useState, useRef } from "react";
import { Wrapper } from "./style";
import anime from "animejs";

//购物卡片
export default function Card(props) {
  const { src, price } = props;

  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);

  const totalRef = useRef(null);
  const amountRef = useRef(null);

  useEffect(() => {
    anime({
      targets: totalRef.current,
      textContent: [total, num * price],
      round: 1,
      easing: "easeOutCirc",
      duration: 300,
      complete() {
        setTotal(num * price);
      },
    });
  }, [num, price]);

  //减
  const handleMinus = () => {
    if (num == 0) {
      return anime({
        targets: amountRef.current,
        easing: "linear",
        duration: 400,
        scale: [{ value: 1.6 }, { value: 1 }],
      });
    }
    setNum(num - 1);
  };

  //加
  const handleAdd = () => {
    setNum(num + 1);
  };

  return (
    <Wrapper>
      <div className="buy-card">
        <img src={src} alt="图片" />
        <div className="buy-info">
          <div className="buy-title">
            <label>价格：</label>
            <span>$</span>
            <span>{price}</span>
          </div>
          <div className="buy-title">
            <label>总价：</label>
            <span>$</span>
            <span ref={totalRef}>{total}</span>
          </div>
          <div className="btns">
            <button className="minus btn" onClick={handleMinus}>
              -
            </button>
            <p className="amount">
              <span ref={amountRef}>{num}</span>
            </p>
            <button className="add btn" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
