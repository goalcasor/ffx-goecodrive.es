'use client'
import styles from '@/styles/hero_section.module.scss'
import Button from '../buttons/PrimaryButton';

const HeroSection = () => {

    return (
        <section
            className={styles.hero_section}
        >
           <div className={styles.hero_section_container}>
                <div className={styles.hero_section_content}>
                    <h1 className={styles.title}>
                        Excelente para tu motor, para tu bolsillo y por supuesto, para el planeta
                    </h1>
                    <Button
                        onClick={() => alert('Hello button')}
                        primary
                    >
                        <h3>Comprar ahora</h3>
                    </Button>

                   
                </div>
           </div>
        </section>
    )
}

export default  HeroSection;