import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Navbar.module.scss'
import { t } from 'i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    //  const [isOpen, setIsOpen] = useState(false);
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if(authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    size={SizeButton.M}
                    theme={ThemeButton.BACKGROUND}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                size={SizeButton.M}
                theme={ThemeButton.BACKGROUND}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            /> }
             
        </div>
    )
}
