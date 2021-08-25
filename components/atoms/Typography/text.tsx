import { FC } from "react";
import styles from './typography.module.scss';

interface TextProps {
    className?: string;
}

const Text: FC<TextProps> = ({children, className}) => {
    return (
        <p className={styles.TypographyP + " " + className ?? ''}>
            {children}
        </p>
    );
}

export default Text;