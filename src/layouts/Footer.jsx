import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const isEnglish = (language) => language.startsWith('en')

const externalLinkClass =
    'text-slate-400 transition hover:text-[#e4ff30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ff30]'

const navLinkClass =
    'text-slate-400 transition hover:text-[#e4ff30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ff30]'

export default function Footer() {
const { t, i18n } = useTranslation()
const year = new Date().getFullYear()

const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish(i18n.language) ? 'ar' : 'en')
}

const navigation = [
    { labelKey: 'header.home', href: '/' },
    { labelKey: 'header.docs', href: '/documentation' },
]

const resources = [
    {
        labelKey: 'footer.figma',
        href: 'https://figma.com/',
    },
    {
        labelKey: 'footer.support',
        href: 'https://github.com/saidbourhabi/',
    },
]

return (
    <footer className="border-t border-[#EEEEEE] bg-[#5b23ff] text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
               {/* // *Logo* */}
                <div className="sm:col-span-2 lg:col-span-1">
                <Link to="/" className="inline-flex items-center gap-2">
                    <img src="/hunter.svg" alt={t('header.logoAlt')} className="h-9 w-9" />
                    <span className="text-lg text-[#e4ff30]">SVGHUNTER</span>
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#EEEEEE]">
                    {t('footer.tagline')}
                </p>
            </div>

          {/* // *Navigation */}
            <div>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#e4ff30]">
                    {t('footer.navigation')}
                </h2>
                <ul className="mt-4 space-y-3">
                    {navigation.map((item) => (
                    <li key={item.href}>
                        <Link to={item.href} className={navLinkClass}>
                            {t(item.labelKey)}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>

          {/* // *Resources* */}
            <div>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#e4ff30]">
                    {t('footer.resources')}
                </h2>
                <ul className="mt-4 space-y-3">
                    {resources.map((item) => {
                    const Icon = item.icon
                    return (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 ${externalLinkClass}`}>
                                {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
                                {t(item.labelKey)}
                            </a>
                        </li>
                        )
                })}
                </ul>
            </div>

          {/* // *Language* */}
            <div>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#e4ff30]">
                    {t('footer.language')}
                </h2>
                <p className="mt-4 text-sm text-slate-400">
                    {t('footer.currentLang')}:{' '}
                    <span className="font-medium text-[#EEEEEE]">
                    {isEnglish(i18n.language) ? t('footer.langEn') : t('footer.langAr')}
                    </span>
                </p>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t('footer.switchLangAria')}
                        className="mt-4 cursor-pointer bg-[#e4ff30] px-4 py-2 text-sm text-slate-950 transition hover:bg-[#e4ff30]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ff30]">
                        {t('footer.switchLang')}
                    </button>
                </div>
            </div>

            {/* // *Bottom bar */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#EEEEEE] pt-8 sm:flex-row">
                <p className="text-sm text-[#EEEEEE]">
                    {t('footer.copyright', { year })}
                </p>
                <p className="text-sm text-[#EEEEEE]">{t('footer.madeBy')}</p>
            </div>
        </div>
    </footer>
)
}
