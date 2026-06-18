import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
const { t } = useTranslation()
return (
    <main className="grid place-items-center bg-[#eeeeee] px-6 py-24 sm:py-32 lg:px-8">
        <Helmet>
            <title>{t('meta.notFoundTitle')}</title>
        </Helmet>
        <div className="text-center">
        <p className="text-6xl text-black">404</p>
        <h1 className="mt-4 text-5xl tracking-wide uppercase text-balance text-[#5b23ff] sm:text-7xl">
            {t('notFound.title')}
        </h1>
        <p className="mt-4 text-lg  text-pretty text-black sm:text-xl/8">
            {t('notFound.message')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
                to="/"
                className="bg-[#e4ff30] rounded px-3.5 py-2.5 text-sm font-medium text-black hover:text-[#eeeeee] hover:bg-[#5b23ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ff30]">
                {t('notFound.backHome')}
            </Link>
            <a
            href="https://github.com/saidbourhabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 text-sm text-black hover:text-[#5b23ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {t('notFound.contactSupport')}
            </a>
        </div>
        </div>
    </main>
)}
export default NotFound
