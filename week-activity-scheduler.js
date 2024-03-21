/* Problem for Friday: 

Problem: Weekday Activity Scheduler
You are given an array of activities for a week. Each day can have one of three activities: "study", "exercise", or "relax". Your task is to write a program that schedules these activities across the week, with each day of the week represented by a number (1 for Monday, 2 for Tuesday, ..., 7 for Sunday).

For each day, you should:

Use a for loop to iterate through the days of the week.
Use a switch statement to schedule an activity for each day based on the activity in the given array.
Use an else-if statement to handle any days with no scheduled activity (e.g., if the activity is "free").
Print out the schedule for each day.

Here's an array of activities for a sample week:

```const weeklyActivities = ["study", "exercise", "relax", "study", "exercise", "relax", "free"];```*/

const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const weeklyActivities = ["study", "exercise", "relax", "free"];

for (let i = 0; i < weekday.length; i++) {
  if (i <= 5)  { switch (true) {
        case weekday[i] == "monday": 
            console.log(weeklyActivities[0]);
            break;
        case weekday[i] == "tuesday": 
            console.log(weeklyActivities[1]);
            break;
        case weekday[i] == "wednesday": 
            console.log(weeklyActivities[2]);
            break;
        case weekday[i] == "thursday": 
            console.log(weeklyActivities[0]);
            break;
        case weekday[i] == "friday": 
            console.log(weeklyActivities[1]);
            break;
        default: console.log(weeklyActivities[3]);
            break;
    }
} else { 
    switch (true) {
        case weekday[i] == "saturday": 
            console.log(weeklyActivities[1]);
            break;
        default: console.log(weeklyActivities[3]);}
            break;
}
}
