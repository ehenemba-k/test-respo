// ELEMENT REFERENCES
// (grabbing every part of the page we'll need to read from or update)

//Sidebar + toggle button
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const logButton = document.querySelector('.quick-btn.primary');

//Streak (sidebar footer)
const streakCountEl = document.getElementById('streak-count');
const streakFillEL = document.getElementById('streak-fill');

//Today's stat cards
const calValue = document.getElementById('cal-value');
const stepsValue = document.getElementById('steps-value');
const activeValue = document.getElementById('active-value');
const hrValue = document.getElementById('hr-value');

// Header greeting text ("You have X workouts logged this week!")
const workoutCountEl = document.getElementById('workout-count');

// "Today's workout" list container (currently empty in the HTML)
const workoutListEl = document.querySelector('.workout-list');

// Weekly goal ring (SVG circle + its text labels)
const goalRingEl = document.getElementById('goal-ring');
const goalPercentEl = document.getElementById('goal-percent');
const goalDaysEl = document.getElementById('goal-days');


// SIDEBAR TOGGLE
menuToggle.addEventListener('click', function(){
  sidebar.classList.toggle('open');
});