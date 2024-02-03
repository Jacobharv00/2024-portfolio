import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from './contact-form'

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
