import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form
        action="https://getform.io/f/1af672b8-86ea-4fb2-9964-74701ee53c0c"
        method="POST"
      >
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email Me
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            required
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
          />
          <TextInput
            required
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput required label="Message" type="text" name="message" />

          {/* <!-- add hidden Honeypot input to prevent spams --> */}
          <TextInput
            type="hidden"
            name="_gotcha"
            className="display:none !important"
            label={''}
          />
        </div>
        <Button type="submit" className="mt-10">
          Send
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-neutral-950">
        Resume
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Check out my resume to learn more about my expertise and experience.
      </p>
      <br />
      <Link
        href="https://violet-drusilla-22.tiiny.site"
        target="_blank"
        className="font-semibold text-neutral-600 hover:text-neutral-950"
      >
        2024 Resume
      </Link>
      <Border className="mt-8 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Get In Touch
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['LinkedIn', 'https://linkedin.com/in/jacobharvey19'],
            ['Email', 'jacobharv00@gmail.com'],
          ].map(([label, item]) => (
            <div key={item}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={
                    item === 'jacobharv00@gmail.com' ? `mailto:${item}` : item
                  }
                  className="text-neutral-600 hover:text-neutral-950"
                  target="_blank"
                >
                  {item}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Connect With Me
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Information on how to get in touch with me.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="" title="Let’s work together">
        <></>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
