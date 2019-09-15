export default {
    change({
        commit
    }) {
        setTimeout(() => {
            commit('change');
        }, 1000);
    }
}