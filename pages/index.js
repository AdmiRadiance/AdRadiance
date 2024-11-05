import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import styles from './Home.module.css'; // Import the CSS module

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
            src="/profile.jpg" // Ensure your image is in the public folder
            alt="Profile Picture"
            width={150} // Set the desired width
            height={150} // Set the desired height
          />
        </div>
        <h1 className={styles.title}>Welcome to AdmiRadiance!</h1>
        <p className={styles.description}>
          Discover a world of fun and creativity! Let's have fun together!.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </>
  );
};

export default HomePage;
