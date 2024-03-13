'use client'
import React from 'react';
import styles from '@/styles/cookies.module.scss';

const PoliticaCookiesPage: React.FC = () => {
  return (
    <div className={styles.container}
    >
      <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
      <h2 className="text-xl font-bold mb-2">Uso de Cookies:</h2>
      <p className="mb-4">Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web y para proporcionarle contenido personalizado.</p>
      <h2 className="text-xl font-bold mb-2">Google Tag Manager:</h2>
      <p className="mb-4">Utilizamos Google Tag Manager para administrar y hacer un seguimiento del uso de cookies en nuestro sitio web. Google Tag Manager nos permite implementar y actualizar fácilmente etiquetas de seguimiento y píxeles de seguimiento, lo que nos ayuda a comprender cómo los usuarios interactúan con nuestro sitio y nos permite realizar mejoras.</p>
      <h2 className="text-xl font-bold mb-2">Píxel de Facebook:</h2>
      <p className="mb-4">Utilizamos el píxel de Facebook para recopilar datos sobre las acciones que los usuarios realizan en nuestro sitio web. Esto nos ayuda a medir la efectividad de nuestras campañas publicitarias en Facebook y a dirigir anuncios específicamente a los usuarios que han interactuado con nuestro sitio.</p>
      <h2 className="text-xl font-bold mb-2">Gestión de Cookies:</h2>
      <p>Puede optar por desactivar las cookies en su navegador, pero tenga en cuenta que algunas partes de nuestro sitio pueden no funcionar correctamente si lo hace.</p>
    </div>
  );
}

export default PoliticaCookiesPage;