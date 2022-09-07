import styled from 'styled-components'

export const Wrapper = styled.div`
    height:100%;
    
    .buy-card{
        margin:50px auto;
        width:200px;
        height:300px;
        background-color:#fff;
        border-radius:5px;
        border:2px dashed #c33;
        padding-top:10px;
        box-shadow:1px 1px 10px rgba(0,0,0,0.1);

        &:hover{
            box-shadow:1px 1px 12px rgba(0,0,0,0.3);
        }

        img{
            width:150px;
            height:150px;
            dispaly:block;
            margin:0 auto;
        }
        .btns{
            display:flex;
            align-item:center;
            justify-content:center;
            margin-top:10px;

            .btn{
                border:0;
                cursor:pointer;
                border-radius:50%;
                width:28px;
                height:28px;
                display:flex;
                justify-content:center;
                align-items:center;
                
                &.add{
                    background-color:rgb(118,201,98);
                }
                &.minus{
                    background-color:rgb(233,93,88);
                }
            }
            .amount{
                width:60px;
                text-align:center;
                height:24px;
                border-bottom:1px solid rgb(73,73,72);
                margin:0 10px;

                span{
                    font-size:18px;
                    font-weight:bold;
                    width:100%;
                    height:24px;
                    display:block;
                    line-height:24px;
                }
            }
            
        }
        .buy-info{
            padding:15px;
            
            .buy-title{
                margin-bottom:13px;
                font-size:16px;
                font-weight:bold;
                height:24px;
                line-height:24px;
                border-bottom:1px solid rgb(73,73,72);
                
                lable{
                    margin-right:5px;
                }
            }
        }
    }
`;