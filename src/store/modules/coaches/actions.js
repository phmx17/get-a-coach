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

    const response = await fetch(`https://find-a-coach-39db7.firebaseio.com/coaches/${userId}.json`, {
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
  },
  async loadCoaches(context) {
    const response = await fetch(`https://find-a-coach-39db7.firebaseio.com/coaches.json`);
    const responseData = await response.json();
    if (!response.ok) {
      // error handling...later
    }
    // convert from a large array object into proper array 
    const coaches =[];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas        
      };
      coaches.push(coach);  // array filled with coaches
    }
    context.commit('setCoaches', coaches);  // commit via mutation; make sure this is inside async block!
  }
};