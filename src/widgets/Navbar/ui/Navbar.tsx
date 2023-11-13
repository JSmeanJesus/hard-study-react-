import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Navbar.module.scss'
import { t } from 'i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/ui/Modal'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    //  const [isOpen, setIsOpen] = useState(false);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

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
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />  
            
        </div>
    )
}
