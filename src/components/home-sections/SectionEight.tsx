'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/section_eight.module.scss'
import { MotorCardData } from '@/data/MotorCard'
import MotorCard from '../cards/MotorCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SectionEight() {

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      };

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);
    

    return (
        <section className={styles.section_eight} id='products'>
            <div className={styles.section_eight_subtile}>
                <h2 className={styles.sub_title}>Optimiza el rendimiento de tu motor: Funciona en cualquier motor de combustión, sea gasolina o diésel.</h2>
            </div>
            <div className={styles.products_container}>
                <Swiper
                    slidesPerView={isMobile ? 1.2 : 3 }
                    spaceBetween={30}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {MotorCardData.map((motor, key) => (
                        <SwiperSlide key={key}>
                            <MotorCard motor={motor} />
                        </SwiperSlide>
                    ))}
                    <div className={styles.autoplay_progress} slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}