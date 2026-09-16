import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { ProjectsSection } from '@/components/ProjectsSection'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Vamo, Vamo Host and the Vamo website. Three products on one backend, built by two people.',
  alternates: { canonical: '/work' },
}

export default function Work() {
  return (
    <>
      <PageIntro eyebrow="Work" title="What I build.">
        <p>
          Three products, one backend, built by two people. This is the work I
          can point at.
        </p>
      </PageIntro>

      <ProjectsSection />
    </>
  )
}
