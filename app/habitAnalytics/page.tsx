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

const dateNums = [];
const dateDays = [];

for(let i=0; i<formattedDates.length; i++ ){
  const parts = formattedDates[i].split(' ');
  dateNums.push(parts[2])
  dateDays.push(parts[0])
}

console.log(dateDays)
console.log(dateNums)

// console.log(formattedDates);

  return (
    <div className='bg-neutral-300'>
      <div className='bg-red-400 flex justify-around px-16'>
        {dateNums.map((num, index) => (
          <div className='flex flex-col bg-blue-100 h-16 w-16 justify-center items-center'>
            <span className='text-2xl'>{num}</span> 
            <span className="text-xs">{dateDays[index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default habitAnalytics