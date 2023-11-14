import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch Data!');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  console.log(params.id);
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <h1 className={styles.contentTitle}>{data.title}</h1>
          <p className={styles.contentText}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src='https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp'
              width={50}
              height={50}
              alt=''
            />
            <h6 className={styles.authorName}>post</h6>
          </div>
        </div>
        <div className={styles.contentImage}>
          <Image
            src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={500}
            height={400}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit
        eveniet! Laboriosam in quo quibusdam est odio pariatur et. Eligendi
        natus dolorum aut? Nam quia, sint harum facilis rem rerum quas quod
        tenetur non aspernatur. Facilis voluptates nam aut totam ullam
        dignissimos provident ipsa placeat sint facere. Labore eveniet quod
        sapiente temporibus dolor atque iusto debitis rerum fugit rem incidunt
        libero, optio error non ratione a ipsa accusantium natus enim odit
        soluta? Dignissimos dolor culpa recusandae nobis repellendus incidunt
        cupiditate, ipsum mollitia eos magnam vitae similique facilis obcaecati
        nam porro! Magni neque dolor consectetur ab nisi sint ex provident rem
        magnam, eius, aut deserunt reiciendis inventore, nemo hic tempore dicta
        recusandae fugit labore nostrum. Distinctio inventore incidunt tenetur
        aliquid odio.
      </div>
    </div>
  );
};

export default BlogPost;
