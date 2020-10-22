// 加载路由视图组件得函数组件 -加载条件-路由路径对应路由视图组件 一一对应得关系   --->获取路由配置表
import React from "react";
// 引入路由内置组件
import { Route } from "react-router-dom";
class RouterView extends React.Component {
  render() {
    const list = this.props.routes.map((item, index) => {
      // 路由对象   加载路由视图组件
      return (
        <Route
          exact
          key={index}
          path={item.path}
          render={(routeProps) => {
            // routeProps 路由元信息
            // 判断当前得路由对象是否存在子路由
            if (item.children) {
              // 存在路由嵌套    递归函数
              return <item.component {...routeProps} routes={item.children} />;
            } else {
              // 不存在路由嵌套
              return <item.component {...routeProps} />;
            }
          }}
        />
      );
    });
    return list;
  }
}
export default RouterView;
