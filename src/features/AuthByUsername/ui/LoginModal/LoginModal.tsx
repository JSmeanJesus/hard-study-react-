import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
//import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        > 
            {/* <Suspense fallback={<div>112</div>}> */}
            <LoginForm />
            {/* </Suspense> */}
        </Modal>
    );
};