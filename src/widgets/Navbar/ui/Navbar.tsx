import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={'/main'}>Home</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    )
}