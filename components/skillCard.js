import styles from "./skillCard.module.css";
import Image from "next/image";


function skillCard(props) {
  return (
    <div  style={props.styl}>
      <Image className={styles.card}
        alt="Flutter"
        src={props.src}
        width={props.width}
        height={props.height}
        quality={45}
      />
    </div>
  );
}

export default skillCard;
