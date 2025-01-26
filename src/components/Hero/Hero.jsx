import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div classNames={styles.content}>
            <h1 className={styles.title}>Hello, I's Corey</h1>
            <p className={styles.description}>I am currently a full stack bootcamp student learing to use react and node js to build a porfolio website. Reach out if you have any words or encouragemnt or tips/tricks.</p>
            <a href="mailto:cparsons0730@yahoo.com" className={styles.contactBtn}>Email Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')}  alt="hero" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        </section>
    );
};