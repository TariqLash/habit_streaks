import React from 'react'

const habitAnalytics = () => {

  const utcDate = new Date(); // UTC time
const now = new Date(utcDate); // Automatically converts to local time
const dates = [];

// Get 6 days before today
for (let i = 6; i > 0; i--) {
  const prevDate = new Date(now);
  prevDate.setDate(now.getDate() - i);
  dates.push(prevDate);
}

// Add today
dates.push(new Date(now));

const formattedDates = dates.map(date => date.toDateString());

for(let i=0; i<formattedDates.length; i++ ){
  const parts = formattedDates[i].split(' ');
  console.log(parts[2])
  console.log(parts[0])
  console.log()
}


// console.log(formattedDates);

  return (
    <div className='w-3/4 h-44 bg-neutral-300'>
      <button></button>
    </div>
  )
}

export default habitAnalytics