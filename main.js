let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18

if (runnerAge > 18 && registeredEarly);
raceNumber += 1000;

if (runnerAge > 18 && registeredEarly) {
  console.log("Runner " + raceNumber + ". Your start time is 9:30 am.");
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber}, late adults run at 11:00 am.`);
}

if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will race at 12:30 pm.`)
} else {
  console.log("If you're 18, please see the registration desk.")
}






