import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["newsletter"]}>
      <div className={styles["newsletter-main"]}>
        <div className={styles["stamp"]}>
          <img src="/letter/stamp.png" alt="" />
        </div>
        <h2>致亲爱的yudi</h2>
        <div className={styles["yayun"]}>本信件非常重要，由lixiang押运。</div>
        <div className={styles["design"]}>
          <img className={styles["designImg"]} src="/letter/design.png" alt="" />
        </div>
        <p>愿得一心人，白头不相离。</p>
        <div className={styles["design"]}>
          <img className={styles["designImg"]} src="/letter/design.png" alt="" />
        </div>
        <div className={styles["tlg"]}>
          <div className={styles["tlg-img"]}>
            <img src="/letter/tlg.png" alt="" />
          </div>
          <div className={styles["tlg-text"]}>
            {/* <h3>lixiang</h3> */}
            {/* <h4>我爱你</h4> */}
          </div>
          <div className={styles["clear"]}> </div>
        </div>
      </div>
    </div>
  </div>
  )
}
