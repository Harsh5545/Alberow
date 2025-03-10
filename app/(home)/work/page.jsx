import React from 'react'
import WorkHero from '@/components/FrontEnd/Work/WorkHero'
import ProjectsGrid from '@/components/FrontEnd/Work/ProjectsGrid'
import Testimonials from '@/components/FrontEnd/Work/Testimonials'
import CTASection from '@/components/FrontEnd/Work/CTASection'
export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectsGrid />
      <Testimonials />
      <CTASection />
    </>
  )
}

