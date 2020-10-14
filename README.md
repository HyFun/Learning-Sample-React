# 特点
1. 声明式设计
2. 高效，采用虚拟dom来实现dom的渲染，最大限度的减少dom的操作
3. 灵活，跟其他库灵活搭配使用
4. JSX，俗称JS里面写HTML，JavaScript语法的扩展
5. 组件化，模块化，代码易复用。
6. 单向数据流。没有实现数据的双向绑定。

# 创建项目
## 1. 通过`script`引入使用，仅用于学习调试使用。（不推荐）

## 2. 通过nmp来创建项目
1. 运行命令`npm install -g create-react-app`
2. 创建项目`create-react-app 项目工程名称`
3. 等待所有项目下载完成，安装完毕后，`cd 项目工程目录`
4. 运行项目`npm run start`

**创建完成项目的目录结构**
```
├─.gitignore
├─package-lock.json
├─package.json
├─README.md
├─src
|  ├─App.css
|  ├─App.js
|  ├─App.test.js
|  ├─index.css
|  ├─index.js
|  ├─logo.svg
|  ├─serviceWorker.js
|  └setupTests.js
├─public
|   ├─favicon.ico
|   ├─index.html
|   ├─logo192.png
|   ├─logo512.png
|   ├─manifest.json
|   └robots.txt
```

# React元素渲染
在JXS语法中
```jsx
const a = <h1>Hello React</h1>
```
其中`a`是就相当于是js中的dom对象。

```jsx
const b = <App />
```
其中`b`是组件对象。

注意：jsx元素对象或者组件对象，必须只有一个根元素（根节点）

## 错误示例：

元素的错误示例
```jsx
// 元素对象是两个元素分开的
const a = <h1>hello</h1><span>world</span>;
```

组件的错误示例
```jsx
// 方法渲染了两个根元素，是错误的
function App() {
  return (
    <h1>hello</h1><span>world</span>
  );
```

# React JSX

**优点**
1. jsx执行更快，编译为JavaScript代码时进行了优化
2. 类型更安全。编译过程如果出错，那么就编译不通过，能及时发现错误
3. 编写模板更加简单快速


**注意点**

1. jsx必须要有且有一个根节点
2. 正常的普通HTML元素要小写，如果是大写，默认认为是组件。

**jsx表达式**


# React的style和class

## 1. 通过变量的方式设置style
```jsx
const exampleStyle = {
  backgroundColor: 'black',
  border: '4px solid green',
  "boder-radus": '50%'
}

const className = 'text-primary'

ReactDOM.render(
  <h1 style={exampleStyle} className={className}>哈哈哈哈</h1>
  ,root)
```
注意：

1. 驼峰命名的方式，也可以使用json的方式来设置
2. 同一个元素，不能设置多个`style`

## 2. class设置
```jsx
const className = 'text-primary'
ReactDOM.render(
  <h1 className={className}>Hello World！</h1>,
  root
)
```
注意：

1. 不能使用`class`，因为在jsx看来，`class`是`JavaScript`中的一个声明类的关键字。使用`className`
2. 同一个元素，不能设置多个`class`

## 3. 设置多个class
```jsx
 const classNames = ['text-primary','bg-primary'].join(' ')
 ReactDOM.render(
   <h1 className={classNames}>Hello World!</h1>,
   root
 )
```

注意：

1. 多个className可以使用数组的方式，但是数组不会自动拆分，需要我们使用`join()`自行处理


# React组件
函数式组件和类组件的区别和使用：
函数式比较简单，一般用于静态没有交互事件内容的组件页面；
类组件，一般又称为动态组件，那么一般会有交互或者数据修改的操作。

