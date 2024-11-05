import Head from 'next/head';
import Header from '../components/Header'; // Import your Header component
import Image from 'next/image'; // Import Next.js Image component
import styles from './Home.module.css'; // Import the CSS module

const HomePage = () => {
  return (
    <>
      <Head>
        <title>AdmiRadiance</title>
        <meta name="description" content="Welcome to AdmiRadiance! Your description here." />
      </Head>
      <Header name="AdmiRadiance" /> {/* Pass the name prop to Header */}
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
        <h1>Welcome to AdmiRadiance!</h1>
        {/* Other content can go here */}
      </div>
    </>
  );
};

export default HomePage;
