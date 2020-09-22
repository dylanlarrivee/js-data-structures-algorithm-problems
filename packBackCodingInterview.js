// Reverse strings in an array
    // I accidentally thought this meant reverse the array AND the strings in the array

// Fibonacci sequence JavaScript
    // Was not sure about the expected outcome here

// Tell if a string is a palindrome

let meetingsArray =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]

const meetingTimes = function(meetingsArray) {
  meetingsArray.sort((a, b) => {
    a.startTime - b.startTime;
  });

  // let totalMeetingTimes = [];
  for (let i = 1; i < meetingsArray.length; i++) {
    // if the 2 times overlap, merge and push to new array
    if (meetingsArray[i - 1].endTime > meetingsArray[i].startTime) {
      //totalMeetingTimes.push({"startTime":meetingsArray[i-1].startTime, "endTime", meetingsArray[i].endTime})
      meetingsArray[i - 1].endTime = meetingsArray[i].endTime;
      meetingsArray.splice(i, 1);
      i--;
    }
  }
  return meetingsArray
};

console.log(meetingTimes(meetingsArray))