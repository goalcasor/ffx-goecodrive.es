import React from 'react';
import styles from '@/styles/components/buttons/call_button.module.scss';
import { LuPhoneOutgoing } from "react-icons/lu";

const CallButton: React.FC = () => {
    return (
        <button 
            className={styles.button}
        >
            <a href="tel:+34661959090"target="_blank" >
            Contacto por llamada
            <LuPhoneOutgoing
            style={{
                fontSize: '4rem',
                margin: '1rem'
            }}/>
            </a>
        </button>
    );
};

export default CallButton;