import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Navbar.module.scss'
import { t } from 'i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/ui/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    //  const [isOpen, setIsOpen] = useState(false);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                size={SizeButton.M}
                theme={ThemeButton.BACKGROUND}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, natus! Saepe repudiandae a eveniet accusamus
                nam enim, dolor alias excepturi cupiditate rem similiqu
                earum laborum quam! Ab quisquam libero sed!
            </Modal>    
            
        </div>
    )
}
