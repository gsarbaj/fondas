import {useTranslations} from "next-intl";

export default function Home() {

    const t = useTranslations("HomePage")


    return (
        <>
            <h1 className={''}>{t('title')}</h1>
            <h3>{t('content')}</h3>
        </>
    );
}
