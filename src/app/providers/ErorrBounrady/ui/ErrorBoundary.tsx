import React, { ErrorInfo, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { PageError } from "widgets/PageError";


interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;

}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo); // Add log service 
    }
  
    render() {

        const { hasError } = this.state;
        const { children } = this.props

        if (hasError) {
            return <Suspense fallback=""> <PageError /> </Suspense>;
            // return <PageError />;
            // return <h1>{t('Что-то пошло не так...')}</h1>;
        }
  
        return children; 
    }
}


export default ErrorBoundary;
// use HOK if you want to use Translation