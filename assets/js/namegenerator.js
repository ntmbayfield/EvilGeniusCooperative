
  var $ = function(id) {
      return document.getElementById(id);
  };

    var generator = function(userInfo) {

      // get the first letter of the user's first name
      const firstLetterOfFName = {"A": "Red", "B": "Dark", "C": "Grey", "D": "Tidal", "E": "Tri", "F": "Strike", "G": "Poison", "H": "Flare", "I": "Blue", "J": "Killer", "K": "Black", "L": "Infinity", "M": "Star", "N": "Chief", "O": "Crazed", "P": "Quake", "R": "Sarsic", "S": "23, Fairy god mother to the Chief", "T": "Devil", "U": "Green", "V": "Silver", "W": "Psion", "X": "Arctic", "Y": "Green", "Z": "Storm"}

      //get the first letter of the user's last name
      const firstLetterOfLName = {"A": "Warrior", "B": "Evil Genius", "C": "Tempter", "D": "Shot", "E": "Doom", "F": "Sword", "G": "Stalker", "H": "Killer", "I": "Slicer", "J": "Thorn", "K": "Fist", "L": "Tyrant", "M": "Lord", "N": "Professor", "O": "Dragon", "P": "Whip", "Q": "Nymph", "R": "Tiger", "S": "Cyborg", "T": "Wizard", "U": "Light", "V": "Brain", "W": "One", "X": "Beast", "Y": "Croc", "Z": "Born"}

      //get the day of the month that the user was born
      const dayOfBirth = ["The Trickster", "The Destroyer", "The Terror", "The Ruler", "The Murderer", "The Richest", "The Monarch", "The Master", "The Enslaver", "The Horror", "The Mistake", "The Mercenary", "The Keeper", "The Rogue", "The General", "The Reviled", "The Smiter", "The Eviscerator", "The Queller", "The Abolisher", "The Silencer", "The Evilest", "The Chaplain", "The Pestilence", "The Hated", "The Feared", "The Dreaded", "The Survivor", "The Immortal", "The Consort", "The Demon"]

      //get the first letter of the user's middle name
      const firstLetterOfMName = {"A": "of Men", "B": "of the Living", "C": "of Europe", "D": "of Venus", "E": "of Women", "F": "of The Ancient Ones", "G": "of Death", "H": "of Time", "I": "of Humanity", "J": "of Earth", "K": "of The States", "L": "of The Future", "M": "of Asia", "N": "of Mars", "O": "of The Galaxy", "P": "of The Stars", "Q": "of Nature", "R": "To Those In Need of Guidance", "S": "of Metropolis", "T": "of Them All", "U": "of Freedom", "V": "of Knowledge", "W": "of Lust", "X": "of Space", "Y": "of Faith", "Z": "of Asia"}


      let firstPartOfEGName ="";
      let secondPartOfEGName ="";
      let thirdPartOfEGName = "";
      let fourthPartOfEGName ="";
      let fullEGName ="";


      let firstLetterOfFirstName=userInfo.firstName[0].toUpperCase();
      let firstLetterOfLastName = userInfo.lastName[0].toUpperCase();
      let firstLetterOfMiddleName ="";
      if (userInfo.middleName[0]==="" || !userInfo.middleName[0]) {
        firstLetterOfMiddleName = "E";
      } else {
         firstLetterOfMiddleName = userInfo.middleName[0].toUpperCase();
      }
      let dayWhenBorn  = userInfo.dayOfMonthOfBirthday;

      if (firstLetterOfFirstName==="S" && firstLetterOfLastName==="B" &&  firstLetterOfMiddleName==="R" && dayWhenBorn===23) {
        fullEGName = "Twenty-Three, Fairy God Mother to The Evilest Of them All"
      } else {
        firstPartOfEGName = firstLetterOfFName[firstLetterOfFirstName];
        //let secondPartOfEGName ="";
        //let firstLetterOfLastName = userInfo.lastName[0].toUpperCase();
        secondPartOfEGName = firstLetterOfLName[firstLetterOfLastName];

        //let fourthPartOfEGName ="";
        // let firstLetterOfMiddleName ="";
        // if (userInfo.middleName[0]==="" || !userInfo.middleName[0]) {
        //   firstLetterOfMiddleName = "E";
        // } else {
        //    firstLetterOfMiddleName = userInfo.middleName[0].toUpperCase();
        // }
        fourthPartOfEGName = firstLetterOfMName[firstLetterOfMiddleName];

        //let thirdPartOfEGName = "";
        //let dayWhenBorn  = userInfo.dayOfMonthOfBirthday;
        thirdPartOfEGName = dayOfBirth[dayWhenBorn -1];

        fullEGName = firstPartOfEGName + " " + secondPartOfEGName + ", " + thirdPartOfEGName + " " + fourthPartOfEGName;
        console.log("Your evil genius name and title is:" + fullEGName);
      }
      // firstPartOfEGName = firstLetterOfFName[firstLetterOfFirstName];
      //let secondPartOfEGName ="";
      //let firstLetterOfLastName = userInfo.lastName[0].toUpperCase();
      // secondPartOfEGName = firstLetterOfLName[firstLetterOfLastName];

      //let fourthPartOfEGName ="";
      // let firstLetterOfMiddleName ="";
      // if (userInfo.middleName[0]==="" || !userInfo.middleName[0]) {
      //   firstLetterOfMiddleName = "E";
      // } else {
      //    firstLetterOfMiddleName = userInfo.middleName[0].toUpperCase();
      // }
      // fourthPartOfEGName = firstLetterOfMName[firstLetterOfMiddleName];

      //let thirdPartOfEGName = "";
      //let dayWhenBorn  = userInfo.dayOfMonthOfBirthday;
      // thirdPartOfEGName = dayOfBirth[dayWhenBorn -1];


      // fullEGName = firstPartOfEGName + " " + secondPartOfEGName + ", " + thirdPartOfEGName + " " + fourthPartOfEGName;
      console.log("Your evil genius name and title is:" + fullEGName);

      document.getElementById("generatedName").innerHTML = "Your Evil Genius Name And Title is: " + fullEGName + "!";

      document.getElementById("insertImage").src="https://i.imgur.com/vIpmVcA.jpg";
      return fullEGName;
      }

      var processEntries = function() {

        var userInfo ={};

        userInfo['firstName'] = $("firstName").value;
          console.log("first initial is ", userInfo.firstName[0]);
        userInfo['lastName'] = $("lastName").value;
          console.log("last initial is ", userInfo.lastName[0]);
        userInfo['middleName']= $("middleName").value;
          console.log("middle initial is ", userInfo.middleName[0]);
        userInfo['dayOfMonthOfBirthday'] = $("dInM").value;
          console.log("born on this day of the month ",
        userInfo.dayOfMonthOfBirthday);

        $("generatedName").value = generator(userInfo);
    };

    // var para = document.createElement("P");
    // var txt = document.createTextNode(Name);
    // para.appendChild(txt);
    // document.body.appendChild(para);

    window.onload = function() {
            $("firstName").focus();
            $("button").onclick = processEntries;
        };
