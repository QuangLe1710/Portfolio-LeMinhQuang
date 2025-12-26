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
                    color: isMouseHover ? 'white' : 'black',
                    borderBottomColor: isMouseHover ? "#F73361" : "white",
                    transition: 'all 0.3 ease', // Dùng 'all' để mượt cả màu chữ và nền
                    backgroundColor: isMouseHover ? "#F73361" : "white",
                    cursor: 'pointer',
                    padding : "8px",
                    borderRadius : "5px",
                }}

            >
                {label}
            </Title>
        </li>
    )
}
