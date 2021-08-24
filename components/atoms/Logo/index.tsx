import styles from './styles.module.css';

const Logo = () => {
    return(
        <div className={styles.logoContainer}>
            <h1 className={styles.brandName}> <span className={styles.spanSlogan}>FE Challenge</span> AVALITH </h1>
        </div>
    )
}

export default Logo;