'use client'
import styles from '@/styles/section_five.module.scss'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Avatar from '../avatar';
import Button from '../buttons/PrimaryButton';

export default function SectionFive() {

    return (
        <section className={styles.section_five} id='docs'>

            <div className={styles.section_five_container}>
                <div className={styles.section_five_text}>
                    <h2 className={styles.sub_title}>Documentación</h2>
                    <p className={styles.description}>FFX es un tratamiento completo para combustible. Otros productos pueden tener uno o dos de nuestros componentes, pero ninguno tiene todos ellos. Haría falta mezclar muchos productos juntos para siquiera acercarse a proporcionarte los mismos beneficios que usar FFX.</p>
                    <ul className={styles.section_five_list}>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            <h3>
                            Usado durante más de 30 años con clientes comerciales.
                            </h3>
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            <h3>
                            Seguimiento de más de 2.5 mil millones de millas.
                            </h3>
                        </li>
                        <li>
                            <IoIosCheckmarkCircleOutline />
                            <h3>
                            Más de 65 millones de horas de uso.
                            </h3>
                        </li>
                    </ul>
                    <hr/>
                    <h3 className={styles.avatars_title}>¿Los conoces?</h3>
                    <div className={styles.section_five_avatars_container}>
                        <Avatar 
                            alt={'Ernst Otto Fisher Photo'}
                            src={'/images/man2.png'}
                        />
                        <Avatar 
                            alt={'Geoffrey Wilkinson Photo'}
                            src={'/images/man3.png'}
                        />
                    </div>
                    <p className={styles.avatars_text}>
                        En 1973, Ernst Otto Fischer y Geoffrey Wilkinson ganaron el Premio Nobel por su trabajo pionero en la química organometálica, la misma química que está detrás de Factor de Combustible X. Ambos químicos revolucionaron nuestra comprensión de los compuestos metálicos y su impacto en áreas como la catálisis y la síntesis de materiales.
                    </p>

                    <Button onClick={() => alert('Alert Docs')}>
                        <h3 className={styles.button_text}>Descargar documentación</h3>
                    </Button> 
                </div>
                <div className={styles.section_five_image}>

                </div>
            </div>

        </section>
    );
}