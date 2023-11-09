// Neo-Berlin Noir: A Cyberpunk Detective Tale
console.log("Welcome to Neo-Berlin Noir: A Cyberpunk Detective Tale");
console.log("-------------------------------");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gameState = {
  examinedClues: [],
  hasUnlockedHiddenFile: false,
};

const clues = {
  body: "You move closer to the disfigured body. Its cyberimplants are heavily damaged, and you notice a tattoo on the forearm.",
  head: "Face is disfigured. To the side of the head you notice a data port. You notice there is a chip inside.",
  message:
    "You analyze the message scrawled on the wall. It reads, 'The Revolution has begun - Day of Reckoning is coming.'",
  hand: "You examine the melted cybernetic hand. It seems to have suffered from extreme heat.",
  chip: "Chip is pretty damaged but you might be able to download some data off of it but it needs a password.",
  air: "You take a deep breath and identify the faint whiff of a specific chemical, possibly a clue.",
  chemical:
    "Your cyberdeck is cross-referencing the particular molecules from the chemical. The chemical formula is C₃₂H₅₀N₆O₈ - usually found on the black market as NeuroFlex - an illegal street drug.",
  tattoo:
    "A intricately designed dragon tattoo. Seems to be relatively new data-ink.",
};

function examineClue(clue) {
  if (!gameState.examinedClues.includes(clue)) {
    console.log(clues[clue]);
    gameState.examinedClues.push(clue);
  }
}

function showExaminedClues() {
  if (gameState.examinedClues.length === 0) {
    console.log("You haven't examined any clues yet.");
  } else {
    console.log("You have examined the following clues:");
    gameState.examinedClues.forEach((clue) => {
      console.log("- " + clue);
    });
  }
}

rl.question("Hi, your name is... ", (detectiveName) => {
  console.log(
    `You are Detective ${detectiveName}, working for Neo-Berlin's police department.`
  );
  console.log("-------------------------------");

  console.log(
    "The year is 2078. The world has undergone significant social, cultural, and economic changes."
  );
  console.log(
    "Climate change has devastated the continents, life is miserable, but humanity is still surviving."
  );
  console.log(
    "Corruption is everywhere, and megacorporations rule the world's countries."
  );
  console.log(
    "Criminality is insanely high due to drug abuse, cyberimplants gone awry, greed, and poverty."
  );
  console.log(
    "The rich are richer, the poor are poorer. Welcome to the gritty and dystopian world of Neo-Berlin, where darkness and neon lights coexist."
  );
  console.log("-------------------------------");

  console.log(
    "You have been called to answer an anonymous tip that a murder has been committed on Karl Marx Strasse."
  );

  console.log("Will you answer the call of duty?");
  rl.question("Type 'Yes' or 'No' (case insensitive): ", (playerChoice) => {
    if (playerChoice.toLowerCase() === "yes") {
      console.log("You have chosen to answer the call of duty.");

      console.log(
        "The local beat cop - Anderson - hands you a datapad which contains a sketch of the crime scene."
      );
      console.log("Crime Scene Layout:");
      console.log("|-----------------------|");
      console.log("|        Alley        |");
      console.log("|                     |");
      console.log("|        (X)          |");
      console.log("|        Body         |");
      console.log("|                     |");
      console.log("|        Dumpster     |");
      console.log("|        ( )          |");
      console.log("|-----------------------|");

      console.log(
        "The crime scene is gruesome. Blood is splattered everywhere, and the disfigured and dismembered body lies before you."
      );
      console.log("It sports extensive cyberimplants and a cyberdeck.");
      console.log("As you examine the surroundings, you notice the following:");
      console.log("- A mysterious message scrawled on the wall in blood.");
      console.log("- A partially melted cybernetic hand lying near the body.");
      console.log("- A disfigured head with undistinguishable features.");
      console.log("- A faint whiff of a specific chemical in the air.");

      console.log(
        "You stand at the crime scene, ready to investigate. You can use commands like 'look left,' 'look right,' 'look up,' 'look down,' 'inspect,' 'touch,' and 'analyze' to examine the area and find clues. You can also combine clues to progress further. Remember you can check your notes anytime by writing 'show clues'."
      );
      let hasExaminedClues = false;
      let hasUnlockedHiddenFile = false;
      let gameProgress = 0;

      console.log("What will you do?");
      rl.prompt();

      rl.on("line", (input) => {
        input = input.trim().toLowerCase();
        switch (input) {
          case "look left":
            console.log(
              "You look to your left and see a dark alley with flickering neon signs - a local 420 shop."
            );
            break;
          case "look right":
            console.log(
              "You turn your head to the right and spot an abandoned building with broken windows - building H20."
            );
            break;
          case "look up":
            console.log(
              "Looking up, you see a dimly lit sky, tainted with smog and neon lights."
            );
            break;
          case "look down":
            console.log(
              "You glance down and notice a trail of spilled chemicals on the ground."
            );
            break;
          case "inspect body":
            examineClue("body");
            hasExaminedClues = true;
            break;
          case "inspect tattoo":
            examineClue("tattoo");
            hasExaminedClues = true;
            break;
          case "inspect hand":
            examineClue("hand");
            hasExaminedClues = true;
            break;
          case "inspect head":
            examineClue("head");
            hasExaminedClues = true;
            break;
          case "inspect chip":
            examineClue("chip");
            hasExaminedClues = true;
            break;
          case "analyze message":
            examineClue("message");
            hasExaminedClues = true;
            break;
          case "analyze air":
            examineClue("air");
            hasExaminedClues = true;
            break;
          case "analyze chemical":
            examineClue("chemical");
            hasExaminedClues = true;
            break;
          case "touch":
            console.log(
              "You touch the cold, lifeless body. It sends shivers down your spine. Victim must have been dead for a couple of hours. Rigor mortis not yet installed."
            );
            break;

          // Combine operation
          case "combine":
            if (hasExaminedClues) {
              console.log(
                "You realize that you can combine clues to make connections."
              );
              console.log(
                "Use the 'combine' command to link two clues and uncover new information."
              );
            } else {
              console.log(
                "You should examine clues first before attempting to make connections."
              );
            }
            break;
          case "show clues":
            showExaminedClues();
            break;

          // Combination options
          case "combine tattoo and chip":
          case "combine chip and tattoo":
            if (hasExaminedClues) {
              if (
                gameState.examinedClues.includes("tattoo") &&
                gameState.examinedClues.includes("chip")
              ) {
                console.log(
                  "You try matching the dragon symbol to a number. Maybe the dragon year in the chinese horoscope? Not working. Try something else."
                );
              }
            } else {
              console.log(
                "You should examine clues first before attempting to make connections."
              );
            }
            break;
          case "combine chemical and chip":
          case "combine chip and chemical":
            if (hasExaminedClues) {
              if (
                gameState.examinedClues.includes("chemical") &&
                gameState.examinedClues.includes("chip")
              ) {
                console.log(
                  "You try matching the chemical formula to the password but it doesn't seem to work. Try something else."
                );
              }
            } else {
              console.log(
                "You should examine clues first before attempting to make connections."
              );
            }
            break;
          case "combine chemical and message":
          case "combine message and chemical":
            if (hasExaminedClues) {
              if (
                gameState.examinedClues.includes("chemical") &&
                gameState.examinedClues.includes("message")
              ) {
                console.log("There is nothing here to combine.");
              }
            } else {
              console.log(
                "You should examine clues first before attempting to make connections."
              );
            }
            break;
          case "combine message and chip":
          case "combine chip and message":
            if (hasExaminedClues) {
              if (
                gameState.examinedClues.includes("message") &&
                gameState.examinedClues.includes("chip")
              ) {
                console.log(
                  "You try matching the date of the last Cyber Revolution and the data chip. You put the date in and the data starts decrypting."
                );
                console.log(
                  "You've unlocked a hidden file on the data chip. It contains encrypted messages related to the case."
                );
                hasUnlockedHiddenFile = true;
                gameProgress++;
                console.log("You found the right combination!");
                if (gameProgress === 1) {
                  askQuestion(questions[0]);
                }
              } else {
                console.log("You can't combine those clues.");
              }
            } else {
              console.log(
                "You should examine clues first before attempting to make connections."
              );
            }
            break;
          default:
            console.log(
              "Invalid command or combination not possible. Try 'look left,' 'look right,' 'look up,' 'look down,' 'inspect,' 'touch,' or 'analyze.'"
            );
            break;
        }
        rl.prompt();
      });
      const questions = [
        {
          question:
            "The chip has been decrypted thanks to your amazing detective work. The chip seems to have an archived conversation between Alberic Gonzales and Pavel Wojnek. What will you do next?",
          options: [
            "Read the conversation",
            "Contact your superiors",
            "Continue investigating the crime scene",
            "Go back to your car and search for warrants on both names",
          ],
        },
      ];
      function askQuestion(questionObj) {
        console.log(questionObj.question);

        for (let i = 0; i < questionObj.options.length; i++) {
          console.log(`${i + 1}. ${questionObj.options[i]}`);
        }

        rl.question("Choose an option (1-4): ", (userChoice) => {
          const choiceIndex = parseInt(userChoice) - 1;
          if (choiceIndex >= 0 && choiceIndex < questionObj.options.length) {
            const selectedOption = questionObj.options[choiceIndex];
            console.log(`You chose: ${selectedOption}`);
            switch (selectedOption) {
              case "Read the conversation":
                console.log(
                  "Alberic: Listen man, I'm freaking out. I told you I wanted out 2 months ago. I'm scared they are on to me and I feel like I'm being watched."
                );
                console.log(
                  "Pavel: Buddy, brosky, pal you are sweating to much. They have no idea trust me! Like I said before, I got your back. If anything happens, like a big red sitch just call Maylan - you know... 311 interior and she will take care of you."
                );
                console.log(
                  "Alberic: Remember our deal, ok? Clean records and enough creds to start fresh. I gotta meet with the bozos tonight. They might be handing me more merch so... be ready for a pick up Monday."
                );
                console.log("1. Go back");

                rl.question("Choose an option (1): ", (userChoice) => {
                  const choiceIndex = parseInt(userChoice) - 1;

                  if (choiceIndex === questionObj.options.length) {
                    console.log("Returning to the previous menu...");
                  } else if (
                    choiceIndex >= 0 &&
                    choiceIndex < questionObj.options.length
                  ) {
                    askQuestion(questionObj);
                  } else {
                    console.log(
                      "Invalid choice. Please choose a valid option (1)."
                    );
                    askQuestion(questionObj);
                  }
                });
                break;
              case "Contact your superiors":
                console.log(
                  "You: Operator, get me the chief on the line, this is  badge N5744."
                );
                console.log(
                  "Operator: Badge N5744 stand by... patching you in to Commisioner Murdock."
                );
                console.log(
                  `Murdock: ${detectiveName} it's 2:45 AM what the hell do you want?`
                );
                console.log(
                  "You: Hey chief... got a body on Karl Marx Str. just finished with the crime scene - m'am my gut is telling me it's something big. I decrypted a chip and it has schematics for a new type of drug. Apparently the victim was stealing from the gang and selling it to someone else - behind their backs. I analyzed the chemical and it seems to be NeuroFlex."
                );
                console.log(
                  `Murdock: Listen ${detectiveName}, it might be worth investigating further but be careful. Check database for warrants and find out all you can about the victim.`
                );
                console.log("You: Got it chief, on it.");
                console.log(
                  "Your gut feeling is strong. This isn't just a typical murder case."
                );
                console.log("1. Go back");

                rl.question("Choose an option (1): ", (userChoice) => {
                  const choiceIndex = parseInt(userChoice) - 1;

                  if (choiceIndex === questionObj.options.length) {
                    console.log("Returning to the previous menu...");
                  } else if (
                    choiceIndex >= 0 &&
                    choiceIndex < questionObj.options.length
                  ) {
                    askQuestion(questionObj);
                  } else {
                    console.log(
                      "Invalid choice. Please choose a valid option (1)."
                    );
                    askQuestion(questionObj);
                  }
                });
                break;
              case "Continue investigating the crime scene":
                console.log(
                  "You sigh and turn back to the crime scene. The whole murder doesn't sit well with you. If the guy got found by his gang and killed as a form of punishment it should have looked more the part."
                );
                console.log("But this? ... looks more like an execution.");
                console.log(
                  `${detectiveName}: I should check the database for warrants, might be able to identify who the victim is...`
                );
                console.log("1. Go back");

                rl.question("Choose an option (1): ", (userChoice) => {
                  const choiceIndex = parseInt(userChoice) - 1;

                  if (choiceIndex === questionObj.options.length) {
                    console.log("Returning to the previous menu...");
                  } else if (
                    choiceIndex >= 0 &&
                    choiceIndex < questionObj.options.length
                  ) {
                    askQuestion(questionObj);
                  } else {
                    console.log(
                      "Invalid choice. Please choose a valid option (1)."
                    );
                    askQuestion(questionObj);
                  }
                });
                break;
              case "Go back to your car and search for warrants on both names":
                console.log(
                  "You get in the car - your trusty old Archer Hella EC-D 1360 - they don't make em' like they used to."
                );
                console.log(
                  "You pull up the nav computer and access NBPD - the police database."
                );
                console.log(
                  "You get hits for one of the names. Scrolling... scrolling..."
                );
                console.log("........................................");
                console.log(
                  "Name: Alberic Gonzales. Occupation: Freelance Hacker."
                );
                console.log(
                  "Criminal record: Petty Theft, Unlicensed Hacking, Assault, Gang Activity, Data Smuggling."
                );
                console.log(
                  "Current Status: Wanted for questioning in illegal drug traffic. Bounty issued."
                );
                console.log(".......................................");
                console.log(".......................................");
                console.log(
                  "You: Seems to be our victim... No way of knowing for sure without DNA and forensic. I could maybe check his last known address for clues. Let's see where our boy lived."
                );
                console.log(".......................................");
                console.log(
                  "Last known address: Vulkanstraße 2113 - megablock D12."
                );
                gameProgress++;
                if (gameProgress === 2) {
                  console.log("You close the database and put in the address.");
                  console.log("You: Pretty close to the crime scene.");
                  console.log(
                    "Location set. You close the door, fasten your beaten up seatbelt and turn on the engine."
                  );
                  console.log("This will be a long night...The plot thickens.");
                  console.log("..........................................");
                  console.log("..........................................");
                  console.log(
                    `Thank you for playing ${detectiveName}! To replay the mission choose option 1. To exit the game - option 2.`
                  );
                  restartOrExit();
                }
                function restartOrExit() {
                  console.log("1. Replay the mission");
                  console.log("2. Exit the game");

                  rl.question("Choose an option (1-2): ", (userChoice) => {
                    if (userChoice === "1") {
                      console.log("Restarting the game...");
                    } else if (userChoice === "2") {
                      console.log("Exiting the game. Goodbye!");
                      rl.close();
                    } else {
                      console.log(
                        "Invalid choice. Please choose a valid option (1-2)."
                      );
                      restartOrExit();
                    }
                  });
                }
            }
          } else {
            console.log("Invalid choice. Please choose a valid option (1-4).");
            askQuestion(questionObj);
          }
        });
      }
    } else if (playerChoice.toLowerCase() === "no") {
      console.log(
        "You have chosen not to answer the call. The case remains unsolved. Just another bad night for Neo-Berlin."
      );
      rl.close();
    }
  });
});

rl.on("close", () => {
  process.exit(0);
});
