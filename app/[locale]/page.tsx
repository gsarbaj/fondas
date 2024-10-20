import {useTranslations} from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default function Home() {

    const t = useTranslations("HomePage")

    const userLanguage = navigator.language
    console.log(userLanguage); // e.g., "en-US"

    const headersList = headers();
    const defaultLocale = headersList.get("accept-language");
    const locale = cookies().get("NEXT_LOCALE")?.value

    console.log(locale)

    return (
        <>
            <h1>{t('title')}</h1>
            <h3>{t('content')}</h3>
        </>
    );
}
