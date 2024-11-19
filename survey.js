const { relative } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {  
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you lsten to while doing that? ", (listenTo) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (dish) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`${name} enjoys doing ${activity} and will always be listening to ${listenTo} when doing it! Their favorite meal of the day is ${meal} and if you want to make ${name} happy just get some ${dish} and it's a guarantee sucess! Make sure to invite ${name} to practice some ${sport} for a great time, and don't forget that ${name}'s superpower is ${superpower}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});