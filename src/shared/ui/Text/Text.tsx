import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Text.module.scss';


export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    //children?: React.ReactNode;
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}
export const Text = (props: TextProps) => {

    const {className, 
        text, 
        title,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
            {title && <p className={cls.tile}> {title} </p>}
            {text &&  <p className={cls.text}> {text} </p>}
        </div>
    );
};