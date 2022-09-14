import { Button, Space } from "antd-mobile";
import { ComputeWrapper } from "./style";
import store from "@/store/compute";
import { actions } from "@/store/compute";
import { useEffect, useState } from "react";

//使用redux进行简单加减运算
export default () => {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      console.log("订阅");
      setCount(() => {
        return store.getState().count;
      });
    });
    return () => {
      console.log("取消订阅");
      unsubscribe();
    };
  });

  const add = () => {
    store.dispatch(actions.add(1));
  };
  const minus = () => {
    store.dispatch(actions.minus(1));
  };

  return (
    <ComputeWrapper>
      <div className="compute-box">
        <div className="compute-num">{count}</div>
        <div className="compute-buttons">
          <Space wrap align="center">
            <Button size="small" color="primary" onClick={add}>
              +1
            </Button>
            <Button size="small" color="primary" onClick={minus}>
              -1
            </Button>
          </Space>
        </div>
      </div>
    </ComputeWrapper>
  );
};
