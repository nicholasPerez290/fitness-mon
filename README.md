# fitness-mon

## user story

* You are looking to keep track of your exercises in order to improve your progress

* You would like to see your exercise weight and duration in a graph in order to quickly see if you are trending in the right direction

* You want to keep track of each exercise you are doing to map progress and keep exercising fresh

## how it works
```
 WHEN the user opens the application 
 THEN they are greeted by a screen telling them the date, duration, and amount of exercises in their last workout
 WHEN the user selects the continue workout or new workout options
 THEN the user is prompted to enter an exercise and either send it to a new workout or the current one depending on the option selected
 WHEN the user selects the dashboard
 THEN the user is greeted by two graphs one displaying the duration of exercises over time, the other displaying total weight lifted
```

## technology used

* This application uses a mongo db based storage to save fitness data.

* Mongoose node.js extension is used to manipulate mongodb data

* Express is used to run the backend server and to control navigation

## images
The intro page
![fitness_tracker](img\Capture.PNG)
When you add a new exercise 
![add_new](img\capture2.PNG)
The dashboard
![dashboard](img\Capture3.PNG)