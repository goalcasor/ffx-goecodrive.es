'use client'
import styles from '@/styles/section_four.module.scss'
import { FAQs } from '../FAQs/FAQs';
export default function SectionFour() {

    return (
        <section className={styles.section_four} id='faq'>
            <div className={styles.section_four_container}>
                <FAQs />
            </div>
        </section>
    );
}