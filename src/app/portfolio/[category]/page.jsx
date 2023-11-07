import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
const Category = ({ params }) => {
  console.log(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            praesentium dolorem at blanditiis vitae illo consectetur impedit
            expedita totam necessitatibus voluptatum officia enim atque nam
            corrupti, assumenda amet facilis optio.
          </p>
          <Button text='See More' url='#' />
          <Button url='/' text='See More' ur />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            praesentium dolorem at blanditiis vitae illo consectetur impedit
            expedita totam necessitatibus voluptatum officia enim atque nam
            corrupti, assumenda amet facilis optio.
          </p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            praesentium dolorem at blanditiis vitae illo consectetur impedit
            expedita totam necessitatibus voluptatum officia enim atque nam
            corrupti, assumenda amet facilis optio.
          </p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/10416213/pexels-photo-10416213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
