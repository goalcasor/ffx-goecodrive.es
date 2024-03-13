import React from 'react';
import styles from '@/styles/components/buttons/whatsapp_button.module.scss';
import { SiWhatsapp } from "react-icons/si";



interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

const WhatsAppButton: React.FC<ButtonProps> = ({children, href}) => {
    return (
        <a 
            className={styles.button}
            href={href} target="_blank"
        >
            
            {children}
            <SiWhatsapp
            style={{
                fontSize: '4rem',
                margin: '1rem'
            }}/>
        </a>
    );
};

export default WhatsAppButton;