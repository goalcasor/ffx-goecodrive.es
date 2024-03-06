'use client'
import styles from '@/styles/section_six.module.scss'
import WhatsAppButton from '@/components/buttons/WhatsAppButton'
import CallButton from '../buttons/CallButton';

export default function SectionSix() {

    return (
        <section className={styles.section_six} id='contact'>

            <div className={styles.section_six_container}>
                <div className={styles.section_six_text}>
                    <h2 className={styles.sub_title}>¿Deseas más información sobre precios al por mayor o sobre cómo obtener descuentos en todos nuestros productos?</h2>
                    <p className={styles.description}>Contáctanos hoy mismo por WhatsApp o Llámanos </p>
                </div>
                <div className={styles.buttons_container}>
                    <WhatsAppButton />
                    <CallButton />
                </div>
            </div>

        </section>
    );
}