export default {
  async registerCoach(context, data) {  // actions are used for async later when using cloud database
    const userId = context.rootGetters.userId; // userId = defined getter in the root store
    const coachData = {      
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(`https://find-a-coach-39db7.firebaseio.com/coaches${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });
    // const responseData = await response.json(); // .json() also returns with a promise

    if (!response.ok) {
      // error handling...later
    }
    // calling the mutation with a fresh array and commiting data to root store
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    }); 
  }
};