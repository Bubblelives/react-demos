import styled from "styled-components";
import { px2rem } from "../../utils/global-style";

export const Wrapper = styled.div`
  .buy-card {
    margin: ${px2rem(10)} auto ${px2rem(50)} auto;
    width: ${px2rem(200)};
    height: ${px2rem(300)};
    background-color: #fff;
    border-radius: ${px2rem(5)};
    border: ${px2rem(2)} dashed #c33;
    padding-top: ${px2rem(10)};
    box-shadow: 1px 1px ${px2rem(10)} rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 1px 1px ${px2rem(12)} rgba(0, 0, 0, 0.3);
    }

    img {
      width: ${px2rem(150)};
      height: ${px2rem(150)};
      display: block;
      margin: 0 auto;
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: ${px2rem(10)};

      .btn {
        border: 0;
        cursor: pointer;
        border-radius: 50%;
        width: ${px2rem(28)};
        height: ${px2rem(28)};
        display: flex;
        justify-content: center;
        align-items: center;

        &.add {
          background-color: rgb(118, 201, 98);
        }
        &.minus {
          background-color: rgb(233, 93, 88);
        }
      }
      .amount {
        width: ${px2rem(60)};
        text-align: center;
        height: ${px2rem(24)};
        border-bottom: 1px solid rgb(73, 73, 72);
        margin: 0 ${px2rem(10)};

        span {
          font-size: 18px;
          font-weight: bold;
          width: 100%;
          height: ${px2rem(24)};
          display: block;
          line-height: ${px2rem(24)};
        }
      }
    }
    .buy-info {
      padding: ${px2rem(15)};

      .buy-title {
        margin-bottom: ${px2rem(13)};
        font-size: ${px2rem(16)};
        font-weight: bold;
        height: ${px2rem(24)};
        line-height: ${px2rem(24)};
        border-bottom: 1px solid rgb(73, 73, 72);

        lable {
          margin-right: ${px2rem(5)};
        }
      }
    }
  }
`;
