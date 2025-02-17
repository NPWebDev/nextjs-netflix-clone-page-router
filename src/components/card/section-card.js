import Card from "./card";
import styles from "./section-card.module.css";

const SectionCard = (props) => {
  const { title, videos = [], size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, i) => {
          return (
            <Card
              key={`${i}-${video.imgUrl}`}
              id={i}
              imgUrl={video.imgUrl}
              size={size}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionCard;
