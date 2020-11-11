export default {
  coaches(state) {
    return state.coaches; 
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0; // return boolean
  },
  // check if user is already a coach; then don't display "register as coach" button in CoachesList
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;  // calling coaches above
    const userId = rootGetters.userId;  // getter in root store
    return coaches.some(coach => coach.id === userId);  // .some = return at least one coach; check if already exists
  }
};