import styles from "./styles.module.scss";

const HelpCard = () => {
  const helpItems = [
    {
      number: 1,
      text: "Enhance service quality and boost revenues by engaging customers through their preferred channels and languages.",
    },
    {
      number: 2,
      text: "Accelerate time-to-market for both existing and new products/services, eliminating the need to wait for monthly cycles to send out communication.",
    },
    {
      number: 3,
      text: "Drive targeted, personalized cross-sell and up-sell opportunities with banner ads and real-time alerts tailored to individual customers.",
    },
    {
      number: 4,
      text: 'Maintain a consistent "look and feel" across all channels with centralized design and formatting of communication templates.',
    },
    {
      number: 5,
      text: "Reduce operational costs by shifting online, minimizing call center dependency, and consolidating statements for greater efficiency.",
    },
  ];

  return (
    <section className={styles.howDoWeHelp}>
      <h2 className={styles.sectionTitle}>
        How Do We <span className={styles.highlight}>Help?</span>
      </h2>
      <div className={styles.helpGrid}>
        {helpItems.map((item, index) => (
          <div key={index} className={styles.helpItem}>
            <div className={styles.helpNumber}>{item.number}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpCard;
