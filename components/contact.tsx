import { LocationEdit, Mail, Phone, Plane, Send } from 'lucide-react'
import { Button } from './ui/button'

export const ContactSection = () => {
  return (
    <section className='py-24' id='contact'>
      <div className='flex flex-col items-center justify-between gap-24 *:flex-1 md:flex-row'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-lg tracking-wider text-white'>Get in touch</p>
            <h3 className='text-3xl font-bold text-white md:text-5xl'>
              Let's work together
            </h3>
          </div>
          <p className='text-textColor text-base tracking-normal md:text-lg'>
            I’m open to freelance, collaborative projects, and onsite
            opportunities. Let’s build something great together—get in touch!
          </p>
          <div className='flex flex-col gap-6'>
            <div className='group flex items-center gap-4'>
              <div className='bg-tealColor group-hover:bg-coralColor rounded-full p-2 transition duration-300'>
                <LocationEdit size={24} />
              </div>
              <div className='space-y-1'>
                <h4>Location</h4>
                <p className='text-sm text-slate-300 md:text-base'>
                  Bajitpur, Kishoreganj, Bangladesh
                </p>
              </div>
            </div>
            <div className='group flex items-center gap-4'>
              <div className='bg-tealColor group-hover:bg-coralColor rounded-full p-2 transition duration-300'>
                <Mail size={24} />
              </div>
              <div className='space-y-1'>
                <h4>Email</h4>
                <p className='text-sm text-slate-300 md:text-base'>
                  srshahin111@gmail.com
                </p>
              </div>
            </div>
            <div className='group flex items-center gap-4'>
              <div className='bg-tealColor group-hover:bg-coralColor rounded-full p-2 transition duration-300'>
                <Phone size={24} />
              </div>
              <div className='space-y-1'>
                <h4>Phone</h4>
                <p className='text-sm text-slate-300 md:text-base'>
                  +88 01797204181
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <form
            action=''
            className='hover:border-coralColor space-y-8 rounded-lg border border-transparent bg-slate-800 p-12'
          >
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Your name'
                id='name'
                name='name'
                className='rounded-sm border border-slate-500 px-4 py-2 focus:outline-0'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Your email'
                id='email'
                name='email'
                className='rounded-sm border border-slate-500 px-4 py-2 focus:outline-0'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='Tell me about your project...'
                id='email'
                name='email'
                className='rounded-sm border border-slate-500 px-4 py-2 focus:outline-0'
                rows={5}
              />
            </div>
            <Button
              size='lg'
              variant='custom'
              type='submit'
              className='flex w-full cursor-pointer items-center justify-center gap-1 rounded-md'
            >
              Send Message
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
