import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptopDesk from '../../public/images/laptop-desk.jpg'

function Quote() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56 ">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <div className="h-px flex-auto bg-neutral-700" />
        </FadeIn>
        <FadeInStagger faster>
          <h2 className="pt-8 font-display text-2xl font-medium tracking-tight text-neutral-950 text-white [text-wrap:balance] sm:text-3xl">
            Never stop learning; For when we stop learning, we stop growing. -
            Loyal Jack Lewman
          </h2>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function TechCard({ technologies }: { technologies: any }) {
  return (
    <>
      <SectionIntro title="Technologies" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          I possess extensive expertise building, optimizing and securing robust
          front-end apps, scalable back-end systems and full-stack solutions
          end-to-end leveraging diverse languages, frameworks and tools.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {technologies.map((tech: any) => {
            return (
              <FadeIn key={tech.id} className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {tech.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {tech.description}
                  </p>
                </article>
              </FadeIn>
            )
          })}
        </FadeInStagger>
      </Container>
    </>
  )
}

function TimeLine() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="TimeLine"
        className="mt-24 sm:mt-32 lg:mt-40"
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
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptopDesk}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="2021 - Present">
              Software Developer at Mahalo Banking, I spearhead mobile & web app
              development to allow for modern cross-platform banking solutions
              serving over 500k members.
            </ListItem>
            <ListItem title="2021">
              Accepted into Flatiron School for Full Stack Software Engineering
              program where I learned a variety of programming languages and
              techniques for building full stack applications using JavaScript,
              React, Ruby and Ruby on Rails.
            </ListItem>
            <ListItem title="2020-2021">
              Started learning how to program by taking a Udemy JavaScript
              Course everyday after work. Built my first todo application and
              hangman game, and deployed them both live for anyone in the world
              to use.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Jacob Harvey portfolio displaying my project, skills, and about me',
}

export default async function Home() {
  const technologies = [
    {
      id: 1,
      section: 'frontEnd',
      title: 'Front End',
      description:
        'CSS, HTML, JavaScript, Next JS, React Native, React, TypeScript',
    },
    {
      id: 2,
      section: 'backEnd',
      title: 'Back End',
      description:
        'C#, DOTNET Web API, Entity Framework, Microsoft SQLServer, MySql, Postgres, Ruby, Ruby On Rails, Solidity, SQL',
    },
    {
      id: 3,
      section: 'tools',
      title: 'Tools',
      description:
        'Alchemy API, Android Studio, AutoMapper, Azure, Babel, Bash Scripting, Bitrise, Docker, ethers.js, Expo, Figma, Git, Hardhat, JWT Auth, Native Base, Netlify, PostgreSQL, PostMan, React Native Debugger, React Native MMKV, Redux, Redux Took Kit, Selenium, Supabase, SQLite3, Styled Components, Swagger, Tailwind, Tamagui, XCode,',
    },
  ]

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Software Developer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Innovative software developer modernizing banking experiences.
            Currently I have been building a cutting-edge typescript & react
            native banking app from scratch that is now relied upon by 500K+
            members across 10 live production apps. I blend strategic vision, UI
            mastery, and robust coding to embed enduring systems. Passionate to
            push technological boundaries & transform complex landscapes into
            seamless user experiences. I love solving immense backend complexity
            with simplified UI/UX to provide a smooth mobile & web experiences.
          </p>
        </FadeIn>
      </Container>

      <Quote />
      <TechCard technologies={technologies} />
      <TimeLine />
    </>
  )
}
