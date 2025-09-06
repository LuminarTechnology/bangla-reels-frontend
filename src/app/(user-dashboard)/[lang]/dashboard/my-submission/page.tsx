import MyEntryCard from '@/src/components/common/MyEntryCard';
import { Button } from '@/src/components/ui/button';
import myEntriesData from '@/src/constants/MyEntries';
import { Plus } from 'lucide-react';
import React from 'react';

const MySubmissionPage = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between gap-6 items-center'>
        <h1 className='font-bold text-sm sm:text-xl text-[#FFFAFA]'>Your current contest status: <span className='text-primary-rose'>2 videos under review.</span></h1>
        <Button className="text-white text-base bg-primary-rose hover:bg-[#d72e4a] active:scale-95 rounded-xl py-5">
          <Plus className='size-6'/> <h4>Add New</h4>
        </Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {myEntriesData.map((entry, index) => (
          <MyEntryCard key={index} {...entry} />
        ))}
      </div>
    </div>
  );
};

export default MySubmissionPage;