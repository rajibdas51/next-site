import Image from 'next/image';
import styles from './page.module.css';
import Hero from '/public/hero.png';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Elevating digital presence through designs.
        </h1>
        <p className={styles.desc}>
          Making your dreams come true. We gather experts from all around the
          world to help your ideas thrive.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        {' '}
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
}
