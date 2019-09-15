export default {
    getNewName(state) {
        return '高级' + state.lesson
    },
    newCount(state) { // 200
        return state.count + 100;
    }
}