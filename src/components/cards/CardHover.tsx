
import React from 'react';
import styles from '@/styles/components/cards/card_hover_secundary.module.scss';
import { CardHover } from '@/data/interfaces/CardHover';

const CardHoverSecondary: React.FC<CardHover> = ({ title, backgroundImage }) => {
    return (
        <div className={styles.card_hover_secondary} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.card_hover_secondary_text_container}>
                <h3 className={styles.card_hover_secondary_title}>{title}</h3>
            </div>
        </div>
    );
};

export default CardHoverSecondary;
