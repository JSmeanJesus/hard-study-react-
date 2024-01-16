import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
// import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
    > 
        {/* <Suspense fallback={<div>112</div>}> */}
        <LoginForm onSuccess={onClose} />
        {/* </Suspense> */}
    </Modal>
);