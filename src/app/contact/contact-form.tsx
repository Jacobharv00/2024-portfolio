'use client'

import { useState, useId } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { useReCaptcha } from 'next-recaptcha-v3'
import Script from 'next/script'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export function ContactForm() {
  const { grecaptcha } = useReCaptcha()

  interface FormProps {
    name?: string
    email?: string
    message?: string
    'g-recaptcha-response'?: string
  }

  const [query, setQuery] = useState<FormProps>({
    name: '',
    email: '',
    message: '',
    'g-recaptcha-response': '',
  })

  const [successMessage, setSuccessMessage] = useState<string>('')

  const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value && e.target.value

    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })

    fetch('https://getform.io/f/1af672b8-86ea-4fb2-9964-74701ee53c0c', {
      method: 'POST',
      body: formData,
    })
      .then(() =>
        setQuery({
          name: '',
          email: '',
          message: '',
        }),
      )
      .then(() => setSuccessMessage('Successfully sent email!'))
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${String(siteKey)}`}
        onReady={() => {
          grecaptcha &&
            grecaptcha.ready(function () {
              grecaptcha
                .execute(String(siteKey), {
                  action: 'submit',
                })
                .then(function (token) {
                  setQuery({
                    'g-recaptcha-response': token,
                  })
                })
            })
        }}
      />
      <FadeIn className="lg:order-last">
        <form
          onSubmit={onFormSubmit}
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
              value={query.name}
              onChange={handleChange()}
            />
            <TextInput
              required
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={query.email}
              onChange={handleChange()}
            />
            <TextInput
              required
              label="Message"
              type="text"
              name="message"
              value={query.message}
              onChange={handleChange()}
            />
          </div>
          <Button type="submit" className="mt-10">
            Send
          </Button>
          {successMessage !== '' && (
            <p className="mt-6 font-display text-2xl font-semibold text-green-500 sm:text-2xl">
              {successMessage}
            </p>
          )}
        </form>
      </FadeIn>
    </>
  )
}

function TextInput({
  label,
  name,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        name={name}
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
