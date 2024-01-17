import { ErrorButton } from 'app/providers/ErorrBounrady';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input/ui/Input';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = React.useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <ErrorButton />
            <Input value={value} onChange={onChange} />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
