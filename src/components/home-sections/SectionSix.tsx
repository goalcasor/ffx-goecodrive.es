'use client'
import styles from '@/styles/section_six.module.scss'
import WhatsAppButton from '@/components/buttons/WhatsAppButton'
import CallButton from '../buttons/CallButton';

export default function SectionSix() {

    return (
        <section className={styles.section_six} id='contact'>

            <div className={styles.section_six_container}>
                <div className={styles.section_six_text}>
                    <h2 className={styles.sub_title}>Accede a toda la información EXCLUSIVA a través de nuestro canal de WhatsApp.
                        <br/>
                        <br/>
                        Ahorra hasta un 30% en tu factura de combustible. Excelente para tu motor, para tu bolsillo y por supuesto, para el planeta
                    </h2>
                </div>
                <div className={styles.buttons_container}>
                    <WhatsAppButton
                        href='https://chat.whatsapp.com/D71KokwLXiT5zrjr6tXned'
                    >
                        <span>¡ ACCEDE AHORA MISMO ! </span>    
                    </WhatsAppButton>

                   {/*  <WhatsAppButton 
                        href='https://chat.whatsapp.com/DVJQk4g9pY1B2QA9wTTvDt'
                    >
                        <span> MUESTRAS | TESTIMONIO</span>
                    </WhatsAppButton> */}
                    <a 
                        href="mailto:goalcasor@gmail.com"
                        target="_blank" 
                    >
                        <h3>goalcasor@gmail.com</h3>
                    </a>
                    {/* <div>
                        <p>*Muestras gratuitas hasta agotar existencias</p>
                    </div> */}
                </div>
            </div>

        </section>
    );
}