import { type FC, type ButtonHTMLAttributes } from 'react'
import { Mods, classNames } from 'shared/lib/helpers/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  INVERTED_BACKGROUND = 'invertedBackground',
}

export enum SizeButton {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  backgroundColor?: string
  square?: boolean
  size?: SizeButton
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        disabled,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls[theme]]: true,
        [cls.disabled]: disabled,
    }
    

    return (
        <button 
            type='button'
            className={classNames(cls.Button, mods, [className, cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}
