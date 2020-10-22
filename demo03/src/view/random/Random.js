import React, { Component } from "react";
import { connect } from "react-redux";
// 组件
import Empty from "@/components/empty/Empty";
import { Button } from "antd-mobile";
// ----
import api from "@/server/api";
import "./random.css";
class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      timmer: null,
      selectAswer: null,
      currentAswer: null,
    };
  }

  render() {
    if (
      Array.isArray(this.props.problemList) &&
      this.props.problemList.length > 0
    ) {
      return (
        <div>
          <h1>
            {this.state.currentIndex + 1}-
            {this.props.problemList[this.state.currentIndex].quiz}
          </h1>
          {JSON.parse(
            this.props.problemList[this.state.currentIndex].options
          ).map((item, index) => {
            const itemClass = this.filterItemInnerClassName(index);
            return (
              <div
                onClick={(e) => {
                  this.clickAnserItem(index);
                }}
                key={index}
                className={
                  this.state.selectAswer === index
                    ? "anser_item select"
                    : "anser_item"
                }
              >
                <div className={itemClass}></div>
                <span style={{ position: "relative", zIndex: "1" }}>
                  {item}
                </span>
              </div>
            );
          })}
          <Button
            type="primary"
            disabled={this.state.timmer !== null}
            onClick={this.clickSubmit}
          >
            提交
          </Button>
        </div>
      );
    } else {
      return <Empty />;
    }
  }
  componentDidMount() {
    // 生成随机数
    const random = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 获取数据
    api
      .getProblem(random(1, 100))
      .then((res) => {
        this.props.setProblemList(res);
        // 默认答案
        this.setState({
          currentAswer: this.props.problemList[0].answer,
        });
      })
      .catch((error) => {
        alert(error.message || "获取失败");
      });
  }

  // --------------点击事件---------------
  /**
   * 点击答案的item
   */
  clickAnserItem = (index) => {
    this.setState({
      selectAswer: index,
    });
  };

  /**
   * 点击提交
   */
  clickSubmit = () => {
    if (this.state.timmer !== null) {
      return;
    }
    if (this.state.selectAswer === null) {
      alert("请选择一个答案");
      return;
    }

    const timmer = setTimeout(() => {
      clearTimeout(this.state.timmer);
      this.setState({
        timmer: null,
        currentAswer: null,
        selectAswer: null,
      });
      // 判断是否还有下一项
      let currentIndex = this.state.currentIndex;
      currentIndex++;
      if (currentIndex < this.props.problemList.length) {
        this.setState({
          currentIndex: currentIndex,
          currentAswer: this.props.problemList[currentIndex].answer,
        });
      } else {
        this.props.history.go(-1);
      }
    }, 1000);
    this.setState({
      timmer: timmer,
    });
  };

  // --------------其他方法---------------
  filterItemInnerClassName = (index) => {
    const classArray = ["anser_item_result"];
    if (this.state.timmer !== null) {
      if (this.state.currentAswer - 1 === index) {
        classArray.push("correct");
      } else if (
        this.state.currentAswer - 1 !== this.state.selectAswer &&
        this.state.selectAswer === index
      ) {
        classArray.push("error");
      }
    }
    return classArray.join(" ");
  };
}

function mapState(state) {
  return {
    problemList: state.problemList,
  };
}

function mapActions(dispatch) {
  return {
    setProblemList(data) {
      dispatch({ type: "setProblemList", data: data });
    },
  };
}

Random = connect(mapState, mapActions)(Random);

export default Random;
