'use client'
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; // Importa el icono burger
import styles from '@/styles/header.module.scss';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <Image
            src={'/images/logo_01.png'}
            alt='logo-fuelfactor'
            width={134}
            height={46}
          />
        </div>
      
        <div className={styles.burger_icon} onClick={toggleMobileMenu}>
          <HiMenu />
        </div>
       
        <div className={`${styles.links_container} ${isMobileMenuOpen ? styles.mobile_menu_open : ''}`}>
          <ul className={styles.links_list}>
            <li>
              <Link href={'#home'}>Inicio</Link>
            </li>
            <li>
              <Link href={'#products'}>Productos</Link>
            </li>
            <li>
              <Link href={'#docs'}>Documentación</Link>
            </li>
            <li>
              <Link href={'#faq'}>FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
