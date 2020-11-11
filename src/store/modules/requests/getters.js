export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId; // still hard coded in root store 
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0; // calling getter above
  }
}