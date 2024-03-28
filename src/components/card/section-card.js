import Card from "./card";
import styles from "./section-card.module.css";

const SectionCard = (props) => {
  const { title } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="large" />
      </div>
    </section>
  );
};

export default SectionCard;
