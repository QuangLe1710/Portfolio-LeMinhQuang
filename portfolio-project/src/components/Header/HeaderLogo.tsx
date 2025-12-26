import React from 'react'
import { Image } from 'antd';

export default function HeaderLogo() {
  return (
    <div>
      <Image
        width={130}
        alt="logo"
        src="/quang.png"
        style={{
          borderRadius : '5px'
        }}
      />
      
      
    </div>
  )
}
