"use client"
import FilmFormPage from '@/src/components/pages/super-admin/film-list/AddAndEditPage'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const FilmForm = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const data = searchParams.get("data");
  
  return (
    <div className='rounded-2xl bg-[#F3F4F6] p-2 md:px-9 md:py-6'>
        <FilmFormPage 
            mode={mode}
            onSave={() => {
              // console.log("on save invoked")
            }}
            onCancel={() => {
              // console.log("on cancel invoked")
            }}
        />
    </div>
  )
}

export default FilmForm