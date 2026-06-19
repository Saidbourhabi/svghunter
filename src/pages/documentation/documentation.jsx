import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Documentation = () => {
const { t } = useTranslation()
return (
    <main className="bg-[#eeeeee] px-6 py-10 lg:px-8">
        <Helmet>
            <title>{t('meta.docsTitle')}</title>
            <meta name="description" content={t('docs.intro')} />
        </Helmet>
        <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl text-[#4e23ff] uppercase">{t('docs.title')}</h1>
            <p className="mt-6 text-lg leading-8 text-sblack">{t('docs.intro')}</p>
            <ol className="mt-10 list-decimal space-y-4 ps-6 text-base leading-7 text-black">
                <li>{t('docs.step1')}</li>
                <li>{t('docs.step2')}</li>
                <li>{t('docs.step3')}</li>
            </ol>
        </div>
    </main>
)}
export default Documentation