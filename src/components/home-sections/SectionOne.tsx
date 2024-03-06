import React from 'react'
import styles from '@/styles/section_one.module.scss'

export default function SectionOne() {
  return (
    <section className={styles.section_one}>
        <div className={styles.section_one_container}>
            <div className={styles.section_one_text}>
                <h2 className={styles.sub_title}>Optimización Avanzada para tu Motor y el Planeta</h2>
                <p className={styles.description}>Descubre la solución integral que transformará tu manera de usar combustible sin tener que dejarlo. Nuestro innovador aditivo FFX mejora significativamente la combustión del motor, garantizando que cada gota de combustible se utilice al máximo. Al elegir FFX, no solo prolongarás la vida útil de tu motor y reducirás el desgaste, sino que también aumentarás la economía de combustible y mejorarás el rendimiento y potencia de tu vehículo. Todo esto mientras reduces las emisiones nocivas y contribuyes a un planeta más limpio. Con una fórmula altamente concentrada, FFX es la respuesta eco-eficiente que tu vehículo necesita.</p>
            </div>
            <div className={styles.section_one_video}>
                <video className={styles.video} controls controlsList="nodownload" poster="/images/05.webp">
                <source src="/videos/ffx-español.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>
  )
}
