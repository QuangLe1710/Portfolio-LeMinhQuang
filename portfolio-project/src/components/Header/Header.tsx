import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import Button from '../common/Button'
import { downLoadCV } from '../../feature/feature'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
        <HeaderLogo/>
        <HeaderNav/>
        <Button 
            label={'Download CV'} 
            onClick={()=> downLoadCV("Download CV")}
            cornerRadius='5px'
            backgroundColor='#FD6F00'
            color='#FFFFFF'
            border = '1px solid #000000'
            padding='9px 12px'
            
        />
    </header>
  )
}
