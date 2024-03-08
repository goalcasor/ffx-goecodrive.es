'use client'
import styles from '@/styles/section_six.module.scss'
import WhatsAppButton from '@/components/buttons/WhatsAppButton'
import CallButton from '../buttons/CallButton';

export default function SectionSix() {

    return (
        <section className={styles.section_six} id='contact'>

            <div className={styles.section_six_container}>
                <div className={styles.section_six_text}>
                    <h2 className={styles.sub_title}>Accede a la información sobre cómo aprovechar nuestros precios para mayoristas y descuentos exclusivos</h2>
                </div>
                <div className={styles.buttons_container}>
                    <WhatsAppButton
                        href='https://chat.whatsapp.com/D71KokwLXiT5zrjr6tXned'
                    >
                        <span>AFILIACIÓN | ACCESO A PRECIOS ÚNICOS</span>    
                    </WhatsAppButton>

                    <WhatsAppButton 
                        href='https://chat.whatsapp.com/DVJQk4g9pY1B2QA9wTTvDt'
                    >
                        <span> MUESTRAS | TESTIMONIO</span>
                    </WhatsAppButton>
                    <a 
                        href="mailto:goalcasor@gmail.com"
                        target="_blank" 
                    >
                        <h3>goalcasor@gmail.com</h3>
                    </a>
                </div>
            </div>

        </section>
    );
}