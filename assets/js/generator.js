

const firstLetterOfFName = {"A": "Red", "B": "Dark", "C": "Grey", "D": "Tidal", "E": "Tri", "F": "Strike", "G": "Poison", "H": "Flare", "I": "Blue", "J": "Killer", "K": "Black", "L": "Infinity", "M": "Star", "N": "Pale", "O": "Crazed", "P": "Quake", "R": "Sarsic", "S": "White", "T": "Devil", "U": "Green", "V": "Silver", "W": "Psion", "X": "Arctic", "Y": "Green", "Z": "Storm"}
const firstLetterofLName = {"A": "Warrior", "B": "Doctor", "C": "Tempter", "D": "Shot", "E": "Doom", "F": "Sword", "G": "Stalker", "H": "Killer", "I": "Slicer", "J": "Thorn", "K": "Fist", "L": "Tyrant", "M": "Lord", "N": "Professor", "O": "Dragon", "P": "Whip", "Q": "Nymph", "R": "Tiger", "S": "Cyborg", "T": "Wizard", "U": "Light", "V": "Brain", "W": "One", "X": "Beast", "Y": "Croc", "Z": "Born"} // refactor to object literal like colors
const dayOfBirth = ["The Trickster", "The Destroyer", "The Terror", "The Ruler", "The Murderer", "The Richest", "The Monarch", "The Master", "The Enslaver", "The Horror", "The Mistake", "The Mercenary", "The Keeper", "The Rogue", "The General", "The Reviled", "The Smiter", "The Eviscerator", "The Queller", "The Abolisher", "The Silencer", "The Watcher", "The Assassin", "The Pestilence", "The Hated", "The Feared", "The Dreaded", "The Survivor", "The Immortal", "The Consort", "The Demon"]
const firstLetterOfMName = {"A": "of Men", "B": "of Hope", "C": "of Europe", "D": "of Gotham", "E": "of Women", "F": "of The Ancient Ones", "G": "of Death", "H": "of Time", "I": "of Humanity", "J": "of Earth", "K": "of The States", "L": "of The Future", "M": "of Asia", "N": "of Mars", "O": "of The Galaxy", "P": "of The Stars", "Q": "of Nature", "R": "of the Living", "S": "of Metropolis", "T": "of Law", "U": "of Freedom", "V": "of Knowledge", "W": "of Lust", "X": "of Space", "Y": "of Faith", "Z": "of Asia"} // refactor to object literal like colors

let generator = function(userInfo) {
  // get the first letter of the user's first name
  // get a color corresponding to that name
  // do the same thing for the last name and middle names
  // for the date of birth
var firstPartOfEGName ="";
var firstLetterOfFirstName= userInfo.firstName[0];
firstPartOfEGName = firstLetterOfFName[firstLetterOfFirstName];


var secondPartOfEGName ="";
var firstLetterOfLastName = userInfo.lastName[0];
secondPartOfEGName = firstLetterOfLName[firstLetterOfLastName];

var fourthPartOfEGName ="";
var firstLetterOfMiddleName = userInfo.middleName[0];
fourthPartOfEGName = firstLetterOfMName[firstLetterOfMiddleName];

var thirdPartOfEGName = "";
var dayWhenBorn  = userInfo.dayOfMonthOfBirthday;
thirdPartOfEGName = dayOfBirth[dayWhenBorn -1];
  
var fullEGName = firstPartOfEGName + " " + secondPartOfEGName + " " + thirdPartOfEGName + " " + fourthPartOfEGName;
  console.log(fullEGName);
}

generator({firstName: "Masha", middleName: "Mad Eye", lastName: "Lifshin", dayOfMonthOfBirthday: "2", })
