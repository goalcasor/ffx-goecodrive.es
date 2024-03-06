'use client'
import styles from '@/styles/section_seven.module.scss'
import Image from 'next/legacy/image';


export default function SectionSeven() {

    return (
        <section className={styles.section_seven} id='contact'>

            <div className={styles.section_seven_container}>
                <div className={styles.section_seven_text}>
                    <h2 className={styles.sub_title}>Descargo de responsabilidad del producto FFX</h2>
                    <p className={styles.description}>FFX es un tratamiento completo para combustible seguro para todos los motores de combustión y aceites de combustible, ya sea gasolina o diésel. Vierta la cantidad sugerida directamente en su tanque de gasolina. No vierta FFX en ninguna boquilla de bomba de gas de uso público. Para vehículos con mecanismos de seguridad o bloqueo en el cuello de llenado de combustible, como tapas, cubiertas o puertas de combustible, utilice un embudo para verter FFX directamente en el tanque. Siga las pautas de cantidad de dosis en el paquete de FFX.</p>
                </div>
                
            </div>
            <footer className={styles.footer}>
                <Image 
                    src={`/images/logo.png`}
                    width={500}
                    height={150}
                    alt='ffx logo'
                />
            </footer>
        </section>
    );
}