不定期更新一些 react 学习中的 demo

### 在线演示（移动端）

#### 使用 Netlify 部署静态 website

[在线预览](https://react-demos.netlify.app)

# 2022.9.15

## 新增移动端适配

但是目前适配仅仅是等比缩放，并没有实现更大屏幕显示更多内容，比如iPad端，这仍然需要探索和适配。

适配思路：设置默认字体大小20px，即1rem = 20px，并且以iPhone 4的640px屏幕宽度为适配基底，相对iPhone 6的750px屏幕宽度进行设计并适配缩放。

思路来源：[React + Redux仿写哔哩哔哩移动端首页+会员购页面](https://github.com/gemini-hjl/bilibili-page.git)

# 2022.9.14 

## 新增redux的使用，简易加减运算

技术栈:
```
        react                18.2.0
        vite                 3.1
        styled-components    5.3.5
        animejs              3.2.1
        antd-mobile          5.22.0
        react-dom-router     6.3.0

      + redux                4.2.0
```

# 2022.9.13

## 完善结构
引入组件库和路由

技术栈:

```
        react                18.2.0
        vite                 3.1
        styled-components    5.3.5
        animejs              3.2.1

      + antd-mobile          5.22.0
      + react-dom-router     6.3.0
```


# 2022.9.7

## 购物卡片练习

来源于 掘金 [[React]双十一就写个购物卡片动画组件吧](https://juejin.cn/post/7027321138313166878)

### 全部使用 hooks 函数式组件

技术栈：

```
    react                18.2.0
    vite                 3.1
    styled-components    5.3.5
    animejs              3.2.1
```



### 下载使用

```
git clone https://github.com/Bubblelives/react-demos.git

npm install

npm run dev

npm run build
```
