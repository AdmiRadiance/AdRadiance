import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>AdmiRadiance</title>
        <meta name="description" content="Welcome to AdmiRadiance! Your hub for exciting Roblox content." />
      </Head>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.profileImage}
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
          />
        </div>
        <h1 className={styles.title}>Welcome to AdmiRadiance!</h1>
        <p className={styles.description}>
          Discover a world of fun and creativity with Roblox! Join us for gameplay, tutorials, and more.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </>
  );
};

export default HomePage;
