import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import StudyHero from '@/components/studyitem/StudyHero'
import StudyPage from '@/components/studyitem/Studypage'


const page = () => {
  return (
    <div>
      <Navbar/>
    <StudyHero/>
    <StudyPage/>
    
    </div>
  )
}

export default page
