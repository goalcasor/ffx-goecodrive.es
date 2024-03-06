
import Image from 'next/image';
import styles from '@/styles/avatar.module.scss';

const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.avatar}>
      <Image src={src} alt={alt} width={80} height={80} className={styles.avatarImage} />
    </div>
  );
};

export default Avatar;