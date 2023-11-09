import { render } from "@testing-library/react";
import  { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export function renderWithTranslation(component: ReactNode) {
    return render(
        <BrowserRouter>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </BrowserRouter>,
    )
}