import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {
  const { imgUrl, size } = props;
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          className={styles.cardImg}
          src={imgUrl}
          alt="image"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Card;
