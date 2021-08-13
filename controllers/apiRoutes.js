const router = require('express').Router();
const db = require("../models");
router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).then(Workout => {
        res.json(Workout);
    }).catch(err => {
        res.json(err);
    });

});
router.put(`/workouts/:id`, (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
    {
        $push: {
        exercises: req.body  
        }},{
            new: true
        }
    ).then((upWork) => {
        res.json(upWork)
    }).catch((err) => {
        res.json(err);
    })

});
router.get("/workouts", (req, res) => {
    console.log('running')
    db.Workout.find({}).then(allWorkout => {
        console.log(all)
        // allWorkout.forEach(workout => {
        //     var total = 0;
        //     workout.exercises.forEach(exercise => {
        //         total += exercise.duration;
        //     });
        //     workout.totalDuration = total;

        // });
        // console.log(allWorkout.exercises);
        res.json(allWorkout);
    }).catch(err => {
        res.json(err);
    });
});
router.post("/workouts", ({ body }, res) => {
   
    console.log(body);

    db.Workout.create(body).then((newWorkout => {
        res.json(newWorkout);
    })).catch(err => {
        res.json(err);
    });
});
module.exports = router;