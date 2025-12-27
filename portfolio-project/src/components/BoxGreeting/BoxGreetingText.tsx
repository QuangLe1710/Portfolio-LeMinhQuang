import React from 'react'
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;
const { Title } = Typography;

export default function BoxGreetingText() {
  return (
    <div className=''>
      <Title  level={4}>Hi I am</Title>
      <Text 
      style={{
        fontSize : '32px',
        color : '#FD6F00',
        fontWeight : 'bolder'
      }} 
      >
        Lê Minh Quang
      </Text>

    </div>
  )
}
