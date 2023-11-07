import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/testId' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/10416213/pexels-photo-10416213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aperiam ut debitis numquam quo dignissimos aliquam commodi eius
            reprehenderit, maxime quam, facilis beatae placeat non perspiciatis
            ex sint inventore voluptate.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default blog;
