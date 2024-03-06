'use client'
import React from 'react'
import styles from '@/styles/section_two.module.scss'
import CardHover from '@/components/cards/CardHover'

export default function SectionTwo() {
  return (
    <section className={styles.section_two}>
        <div className={styles.section_two_subtile}>
            <h2 className={styles.sub_title}>FFX es una solución todo en uno, ahorras, proteges tu motor y mucho más...</h2>    
        </div>    
        
        <div className={styles.section_two_container}>
            <div className={styles.section_two_image}></div>  
            <div className={styles.section_two_grid_container}>
                
                <div className={styles.section_two_grid_content}>
                    <div className={styles.section_two_grid_item_01}>
                        <div className={styles.section_two_grid_sub_item_01}>
                            <CardHover 
                                title='ALARGA LA VIDA ÚTIL DEL MOTOR Y MITIGA EL DESGASTE.'
                                backgroundImage='/images/small-cards/03.webp'
                            />
                        </div>
                        <div className={styles.section_two_grid_sub_item_02}>
                            <CardHover 
                                title='MEJORA LA EFICIENCIA DEL COMBUSTIBLE.'
                                backgroundImage='/images/small-cards/04.webp'
                            />
                        </div>
                    </div>

                    <div className={styles.section_two_grid_item_02}>
                        <div className={styles.section_two_grid_sub_item_01}>
                            <CardHover 
                                title='MINIMIZA LAS EMISIONES PERJUDICIALES Y LOS CONTAMINANTES.'
                                backgroundImage='/images/small-cards/05.webp'
                            />
                        </div>
                        <div className={styles.section_two_grid_sub_item_02}>
                            <CardHover 
                                title='POTENCIA EL RENDIMIENTO Y LA POTENCIA DEL VEHÍCULO.'
                                backgroundImage='/images/small-cards/08.webp'
                            />
                        </div>
                        <div className={styles.section_two_grid_sub_item_03}>
                            <CardHover 
                                title='ALTAMENTE CONCENTRADO.'
                                backgroundImage='/images/small-cards/10.webp'
                            />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}
