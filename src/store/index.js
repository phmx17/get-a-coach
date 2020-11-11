import { createStore } from 'vuex';

// import our vuex modules
import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';

const store = createStore({
  modules: {
    coaches: coachesModule,  // coaches is the namespace for coachesModule
    requests: requestsModule  // requests is the namespace for coachesModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
})

export default store;