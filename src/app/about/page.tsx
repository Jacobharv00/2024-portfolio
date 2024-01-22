import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'

function ProfilePicture() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <div className="lg:col-span-3">
            <ul
              role="list"
              className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-2"
            >
              <li>
                <FadeIn>
                  <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      alt=""
                      src={imageLeslieAlexander}
                      className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                      <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                        Jacob Harvey
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Software Developer at Mahalo Technologies, Inc
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            </ul>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'About me page describing a little about myself and what I can offer',
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About Me" title="Building the future">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Innovative software developer modernizing banking experiences.
            Currently I have been building a cutting-edge typescript & react
            native banking app from scratch that is now relied upon by 500K+
            members across 10 live production apps. I blend strategic vision, UI
            mastery, and robust coding to embed enduring systems. Passionate to
            push technological boundaries & transform complex landscapes into
            seamless user experiences. I love solving immense backend complexity
            with simplified UI/UX to provide a smooth mobile/web experiences.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem
            value="12"
            label="Multi-Tennant production web/mobile banking apps used by over 500k members and growing."
          />
          <StatListItem
            value="10"
            label="Deployed projects to live domains for the world to see."
          />
          <StatListItem
            value="1"
            label="Graduated Flatiron School full stack software engineering program in 2021."
          />
        </StatList>

        <ProfilePicture />
      </Container>
    </>
  )
}
