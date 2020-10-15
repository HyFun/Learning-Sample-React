import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");

// ------------------列表渲染-------------------
/**
 * 将列表的内容拼装成数组，放置模板中
 */
let arr = ["小明", "小黑", "小白"];

class List extends React.Component {
  render() {
    const array = this.props.data.map((item,index) => <li key={index} onClick={()=>{this.clickItem(index,item)}}>{item}</li>);
    return (
      <div>
        <ul>
          {array}
        </ul>
      </div>
    );
  }

  clickItem=(index,content)=>{
    alert(index+'---'+content)
  }
}

ReactDOM.render(<List data={arr} />, root);
