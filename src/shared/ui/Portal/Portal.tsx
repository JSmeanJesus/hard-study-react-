import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: React.ReactNode;
    element?: HTMLElement;
}
export const Portal = (Props: PortalProps) => {

    const {
        children,
        element = document.body,
    } = Props;

    return createPortal(children, element)
};