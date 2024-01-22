import clsx from 'clsx'
import Link from 'next/link'

function ProjectItem({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Projects({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <ProjectItem name="Crypto Cookie" invert={invert}>
          Web 3 app that allows users to trade ethereum through the blockchain
          using metamask as an ethereum wallet. You can connect your metamask
          wallet and trade crypto with different accounts. Web 3.0 is the
          future!
          <br />
          <br />
          Tech: React, Solidity, Ethers.js, Alchemy, Tailwind
          <br />
          <br />
          <Link
            href="https://github.com/Jacobharv00/crypto-cookie"
            className="mr-8 mt-4 text-sm font-semibold text-neutral-950 text-white transition hover:text-neutral-700"
          >
            GitHub
          </Link>
          <Link
            href="https://cryptocookie.netlify.app"
            className="mt-4 text-sm font-semibold text-neutral-950 text-white transition hover:text-neutral-700"
          >
            Live Site
          </Link>
        </ProjectItem>
      </li>
      <li>
        <ProjectItem name="E-Boss" invert={invert}>
          Ecommerce store that sells the hottest and sleekest products. E-Boss
          is a e-commerce store where you can find everything you need to get
          your developer office all set up. Payments are always secured.
          <br />
          <br />
          Tech: React, Commerce.js, Stripe.js, Material UI
          <br />
          <br />
          <Link
            href="https://github.com/Jacobharv00/e-commerce"
            className="mr-8 mt-4 text-sm font-semibold text-neutral-950 text-white transition hover:text-neutral-700"
          >
            GitHub
          </Link>
          <Link
            href="https://eboss.netlify.app"
            className="mt-4 text-sm font-semibold text-neutral-950 text-white transition hover:text-neutral-700"
          >
            Live Site
          </Link>
        </ProjectItem>
      </li>
    </ul>
  )
}
