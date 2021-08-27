import styles from './Logo.module.css';
import { useRouter } from 'next/dist/client/router';

const Logo = () => {
    const router = useRouter();
    return(
        <div className={styles.logoContainer + " d-flex align-items-center"} onClick={() => router.push('/')}>
            <h1 className={styles.brandName}> <span className={styles.spanSlogan}>FE Challenge</span> AVALITH </h1>
        </div>
    )
}

export default Logo;