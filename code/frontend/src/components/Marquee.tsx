import { useList } from "../editable";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const items = useList<string>("marquee.items");
  const row = [...items, ...items];
  return (
    <div className={styles.band}>
      <div className={styles.track}>
        {row.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
