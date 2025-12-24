import React from 'react'
import HeaderOption from './HeaderOption'

export default function HeaderNav() {
  return (
    <div className='text-center'>
        <ul className='flex gap-10 p-3.5'>

              <HeaderOption
                label='Home'
              />

              <HeaderOption
                label='About Me'
              />

              <HeaderOption
                label='Services'
              />

              <HeaderOption
                label='Projects'
              />

              <HeaderOption
                label='Testimonials'
              />

              <HeaderOption
                label='Contact'
              />
        </ul>
    </div>
  )
}
