import React, { type FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import { Link, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'inverted-primary',
  INVERTED_SECONDARY = 'inverted-secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: React.ReactNode // need this
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props
    return (
        <Link to={to}
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>

    );
}
