import React from 'react';
import styles from '@/styles/components/buttons/whatsapp_button.module.scss';
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton: React.FC = () => {
    return (
        <button 
            className={styles.button}
        >
            <a href={`https://wa.me/34661959090?text=Hola,%20Estoy%20interesad_%20en%20recibir%20mis%20muestras%20gratis%20de%20FFX`} target="_blank" >
                Contacto vía WhatsApp
            <SiWhatsapp
            style={{
                fontSize: '4rem',
                margin: '1rem'
            }}/>
            </a>
        </button>
    );
};

export default WhatsAppButton;