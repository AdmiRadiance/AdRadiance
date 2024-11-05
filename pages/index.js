import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link component for navigation
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
          Discover a world of fun and creativity with Roblox! Join us for gameplay, tutorials, and more.
        </p>
        <Link href="/your-target-page" passHref>
          <button className={styles.ctaButton}>Get Started</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
