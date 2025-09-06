"use client"
import ContestFormPage from '@/src/components/pages/contest/contest-form/ContestForm'
import ContestBanner from '@/src/components/pages/contest/ContestBanner'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ContestForm = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const data = searchParams.get("data");
  
  return (
    <div>
    <ContestBanner form={true}/>
    <div className=''>
        <ContestFormPage
            onSave={() => {
              // console.log("on save invoked")
            }}
            onCancel={() => {
              // console.log("on cancel invoked")
            }}
        />
    </div>
    </div>
  )
}

export default ContestForm