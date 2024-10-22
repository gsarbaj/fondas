import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from "next-intl";
import Photo from '../../img/Pictures/462622577_8686068808116904_8167130653603826924_n.jpg'

export default function Component() {
    const t = useTranslations("HomePage")

    return (
        <div className="min-h-screen bg-background">

            <main>
                <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {t('title')}
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                {t('content')}
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="/"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {t('button_help')}
                                </Link>
                                <Link
                                    href="#projects"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {t('button_more')}
                                </Link>
                            </div>
                        </div>
                        <Image
                            src={Photo}
                            alt={t('title')}
                            width={600}
                            height={600}
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}