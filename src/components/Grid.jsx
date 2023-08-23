import styles from "../_css.module.scss";

export default function Grid() {
  return (
    <div className={styles.container}>
      <div className={styles.a}>header</div>
      <div className={styles.b}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, iste.
          dfbjsdkjbads;kjbc;asdvbds;b hsdbfjdhsfjhl fdshfvsalf dsh vfdhv dsl
          vfdsjfvdshjavf dsf
        </p>
      </div>
      <div className={styles.c}>Bar</div>
      <div className={styles.d}>Footer</div>
    </div>
  );
}
