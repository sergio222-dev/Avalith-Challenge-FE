import React, { FC, HTMLAttributes } from "react";
import styles from './typography.module.scss';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

const Text: FC<TextProps> = ({children, className, ...props}) => {
    return (
        <p className={styles.TypographyP + " " + className ?? ''} {...props}>
            {children}
        </p>
    );
}

export default Text;