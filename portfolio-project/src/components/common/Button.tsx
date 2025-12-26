import React from 'react'

interface ButtonProps {
    backgroundColor?: string;
    color?: string;
    font?: string;
    onClick?: () => void;
    label?: string ;
    isActive?: boolean;
    cornerRadius?: string;
    margin?:string;
    marginLeft?:string;
    marginRight?:string;
    marginTop?:string;
    marginBot?:string;
    border?: string;
    padding?:string;
}

export default function Button({ 
        backgroundColor,
        color = '#000000',
        font,
        onClick,
        label = 'Button',
        isActive,
        cornerRadius = '5px',
        marginBot,
        marginRight,
        marginLeft,
        marginTop,
        margin,
        border,
        padding,
    } : ButtonProps) {
    return (
        <>
            <button 
                onClick={onClick} 
                style={{ 
                    backgroundColor: backgroundColor,
                    color : color,
                    fontFamily: font,
                    borderRadius: cornerRadius,
                    border : border,
                    marginLeft : marginLeft,
                    marginRight : marginRight,
                    marginTop : marginTop,
                    marginBottom : marginBot,
                    padding:padding
                    
                }}
            >
                {label}
            </button>
        </>
    )
}



