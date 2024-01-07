import React, { useCallback, useEffect, useRef } from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import cls from './Modal.module.scss';
//import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const ANIMATION_DELAY = 250;

    const handleClose = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);



    const [isClosing, setIsClosing] = React.useState(false);
    const timeRef = useRef() as React.MutableRefObject<ReturnType<typeof setTimeout >>;



    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.open]: isOpen,
        [cls.isClosing]: isClosing,
        
    }

    // if(document.getElementById("root")) {
    return (
        //<Portal element={document.getElementById("root")}>
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content}
                    onClick={handleClick}>
                    {children}
                </div>
            </div>
        </div>
    //  </Portal>
    );
    // }
};