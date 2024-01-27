import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Projects } from '@/components/Projects'

export function ProjectsSection() {
  return (
    <Container className=" mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-3xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Projects
            </h2>
            <div className="mt-10 border-t border-white/10 pt-10">
              <Projects
                invert
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
