import { FC } from "react";
import styles from './typography.module.scss';

interface TitleProps {
    As?: keyof JSX.IntrinsicElements
}

const Title: FC<TitleProps> = ({children, As}) => {
    
    return As !== undefined ? 
    (
        <As className={styles.TypographyTitle}>
            {children}
        </As>
    ) :
    (
        <h1 className={styles.TypographyTitle}>
            {children}
        </h1>
    )
}

export default Title;