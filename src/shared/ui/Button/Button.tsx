import { type FC, type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  backgroundColor?: string
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props
    return (
        <button className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...otherProps}>
            {children}
        </button>
    );
}
