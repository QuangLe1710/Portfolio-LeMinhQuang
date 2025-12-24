import React, { useState } from 'react'
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const { Title } = Typography;


interface TitleProps {
    label?: string;
    color?: string;
}

export default function HeaderOption({ label, color }: TitleProps) {

    const [isMouseHover, setIsMouseHovered] = useState(false);



    return (
        <li className='cursor-pointer'
            onMouseEnter={() => setIsMouseHovered(true)}
            onMouseLeave={() => setIsMouseHovered(false)}
        >
            <Title
                level={5}
                style={{
                    color: isMouseHover ? 'red' : 'black',
                    borderBottomColor : isMouseHover ? "#F73361" : "white" ,
                    transition: 'backgroundColor 0.4s',
                }}
            >
                {label}
            </Title>
        </li>
    )
}
