import { type Metadata } from 'next'
import Image from 'next/image'

import { ProjectsSection } from '@/components/ProjectsSection'
import { PageIntro } from '@/components/PageIntro'

{
  /* <Image src={logo} alt={client} unoptimized /> */
}

export const metadata: Metadata = {
  title: 'My Work',
  description: 'A page showing my projects',
}

export default async function Work() {
  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Developing practical solutions to address everyday needs."
      >
        <p>
          2+ years of experience developing innovative web & mobile applications
          for Mahalo Banking leveraging TypeScript and React Native. I have
          specialized in understanding complex requirements for neurodiverse
          users and translating them into intuitive digital experiences. In my
          day-to-day work, I aim to balance simplicity with depth in both design
          and technical implementation. My goal is for the user journey to be
          frictionless while I solve complex problems behind the scenes through
          clean, modular code. I believe my specialized experience and passion
          for accessibility can add value to customer-focused development teams
          pushing the boundaries.
        </p>
      </PageIntro>

      <ProjectsSection />
    </>
  )
}
