const totalDurationFunc = (json) => {
  json.forEach((workout) => {
    
    let total = 0
    workout.exercises.forEach((ex) => {
      total += ex.duration
    })
    workout.totalDuration = total;
  })
  return json
}
const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }
    
    const json = await res.json();
    
    totalDurationFunc(json);
    console.log(json)
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    console.log(res)
    const json = await res.json();
    totalDurationFunc(json)
    return json;
  },
};
