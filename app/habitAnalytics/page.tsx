import { Button } from '@/components/ui/button';
import React from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


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

  for (let i = 0; i < formattedDates.length; i++) {
    const parts = formattedDates[i].split(' ');
    dateNums.push(parts[2])
    dateDays.push(parts[0])
  }

  console.log(dateDays)
  console.log(dateNums)

  // console.log(formattedDates);

  return (
    <div className='bg-neutral-300 m-8 h-screen'>
      <div className='flex justify-between mb-8'>
        {dateNums.map((num, index) => (
          <Button key={num} className='flex flex-col size-24 justify-center items-center'>
            <span className='text-2xl'>{num}</span>
            <span className="text-xs">{dateDays[index]}</span>
          </Button>
        ))}
      </div>
      <AlertDialog>
        <AlertDialogTrigger>Add Task</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}

export default habitAnalytics