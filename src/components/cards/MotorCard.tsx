// ProductCard.tsx
import React from "react";
import styles from "@/styles/components/cards/motor_card.module.scss";
import { MotorInterface } from "@/data/interfaces/MotorInterface";

interface MotorCardProps {
  motor: MotorInterface;
}

const MotorCard: React.FC<MotorCardProps> = ({ motor }) => {
  return (
    <article 
        className={styles.motor_card}
        style={{
            backgroundImage: `url(${motor.image})`
          }}   
    >
      
      <h2 className={styles.motor_card_title}>{motor.title}</h2>
    </article>
  );
};

export default MotorCard;
