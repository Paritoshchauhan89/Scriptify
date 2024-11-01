import Link from 'next/link';
import styles from './service.module.css';
import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    title: 'Article Publishing Tools',
    description: 'Streamline your publishing process with our comprehensive suite of tools designed to make article writing and submission easier and more efficient.',
    imageSrc: '/Images/Article Publishing tools.png',
  },
  {
    id: 2,
    title: 'Plagiarism Checking',
    description: 'Ensure the originality of your work with our state-of-the-art plagiarism detection tools, offering thorough checks and detailed reports.',
    imageSrc: '/Images/Plagiarism Checking.png',
  },
  {
    id: 3,
    title: 'AI Content Removal',
    description: 'Leverage our AI technology to remove unwanted content effortlessly, ensuring your work is polished and ready for publication.',
    imageSrc: '/Images/AI Content Removal.png',
  },
  {
    id: 4,
    title: 'Journal Services',
    description: 'Access our comprehensive journal services, designed to assist in every aspect of journal submission and management.',
    imageSrc: '/Images/Journal Services.png',
  },
];

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <p className={styles.subtitle}>
        Explore the range of features we offer to enhance your writing and publishing experience.
      </p>
      <div className={styles.services}>
        {servicesData.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <Image
              src={service.imageSrc} // Use the image source from the data array
              alt={service.title} // Use the title as the alt text for accessibility
              width={500} // Fixed width for loading purposes
              height={300} // Fixed height for loading purposes
              className={styles.responsiveImage} // If you have specific styling for images
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={`/services/${service.id}`} className={styles.button}>Learn More</Link>

            </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
