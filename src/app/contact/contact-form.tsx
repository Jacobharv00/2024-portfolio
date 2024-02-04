'use client'

import { useState, useId, useEffect } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import ReCAPTCHA from 'react-google-recaptcha'

import type { ChangeEvent } from 'react'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

interface FormValues {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [captcha, setCaptcha] = useState<string | null>()

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    setFormValues({ name: '', email: '', message: '' })
  }, [])

  return (
    <>
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
              value={formValues.name}
              onChange={handleChange}
            />
            <TextInput
              required
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <TextInput
              required
              label="Message"
              type="text"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col items-end pt-6">
            <ReCAPTCHA
              sitekey={String(siteKey)}
              className="mb-4"
              onChange={setCaptcha}
            />
            {captcha && (
              <Button
                type="submit"
                className="sm:w-50 flex h-14 w-72 items-center justify-center rounded-xl"
              >
                Send
              </Button>
            )}
          </div>
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
