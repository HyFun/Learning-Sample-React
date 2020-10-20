import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import { Provider,connect } from "react-redux";

const root = document.querySelector("#root");

// ------------------React-redux使用-------------------
/**
 * 一种状态管理的解决方案
 * Store 数据仓库，保存数据的地方
 * State 保存data数据的地方，包含整个应用所有的数据
 * Action 动作，触发数据改变的方法
 * Dispatch 触发动作的方法
 * Reduce 通过获取action，改变数据，生成一个新的state，从而改变页面
 */
// 创建仓库
class Counter extends React.Component {
    render() {
        console.log(this.props);
        // 计数，通过store的state传给props，直接通过props就可以获取state的数据结构
        const value = this.props.value
        // 将修改数据的事件或者方法传入到props，等同于vue的mapMutation、mapActions
        const onAddClick = this.props.onAddClick
        const onReduceClick = this.props.onReduceClick
        return (
            <div>
                <h1>计数的数量：{value}</h1>
                <button onClick={onReduceClick}>-</button>
                <button onClick={onAddClick}>+</button>
            </div>
        )
    }
    
}

const store = createStore((state={number:0},actions) => {
    switch(actions.type) {
        case 'add':
        state.number++
        break
        case 'reduce':
        state.number--
        break
        default:
        break
    }
    return {...state}
})

// 将store中的state映射到指定组件的props中
function mapState(state) {
    return {
        value: state.number
    }
}

// 将store中的方法映射到props中
function mapActions(dispatch) {
    return {
        onAddClick:()=>{
            dispatch({type:'add'})
        },
        onReduceClick:()=>{
            dispatch({type:'reduce'})
        }
    }
}

// 将store 和 mapState、mapActions关联起来
const App = connect(mapState,mapActions)(Counter)


ReactDOM.render(<Provider store={store}><App></App></Provider>, root);
