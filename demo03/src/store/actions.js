export default {
    /**
     * 获取到问题列表后设置问题列表
     * @param {*} state 
     * @param {*} data 
     */
    setProblemList(state,data){
        state.problemList = data
        return state
    }
}