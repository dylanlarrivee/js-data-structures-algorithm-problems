const meetings =     [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

  const meetingCondenser = function(meetings) {
    meetings.sort((a, b) => parseFloat(a.startTime) - parseFloat(b.startTime));

    for (let i=0; i<meetings.length-1; i++) {
        if(meetings[i+1].startTime >= meetings[i].startTime && meetings[i+1].startTime <= meetings[i].endTime) {
            if (meetings[i+1].endTime > meetings[i].endTime) {
                meetings[i].endTime =  meetings[i+1].endTime
            }
            meetings.splice(i+1,1)
        }
    }

    return meetings
  }


  console.log(meetingCondenser(meetings))