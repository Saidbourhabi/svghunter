import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
    translation: {
        meta: {
        notFoundTitle: 'Page not found | SVGhunter',
        },
        notFound: {
        title: 'Page not found',
        message: 'Sorry, we couldn’t find the page you’re looking for.',
        backHome: 'Go back home',
        contactSupport: 'Contact support',
        },
        header: {
        home: 'Home',
        docs: 'Docs',
        openMenu: 'Open main menu',
        logoAlt: 'SVGhunter logo',
        },
        footer: {
        tagline: 'Free hand-crafted SVG icons for developers. Search, preview, and copy instantly.',
        navigation: 'Navigation',
        resources: 'Resources',
        language: 'Language',
        currentLang: 'Current language',
        switchLang: 'AR',
        switchLangAria: 'Switch to Arabic',
        langEn: 'English',
        langAr: 'العربية',
        figma: 'Get Figma File',
        support: 'Report an issue',
        copyright: '© {{year}} SVGhunter. All rights reserved.',
        madeBy: 'Built with love',
        },
        buymeacoffee: {
        label: 'Buy me a coffee',
        },
    },
},
    ar: {
    translation: {
        meta: {
        notFoundTitle: 'الصفحة غير موجودة | SVGhunter',
        },
        notFound: {
        title: 'الصفحة غير موجودة',
        message: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.',
        backHome: 'العودة إلى الرئيسية',
        contactSupport: 'اتصل بالدعم',
        },
        header: {
        home: 'الرئيسية',
        docs: 'التوثيق',
        openMenu: 'فتح القائمة الرئيسية',
        logoAlt: 'شعار SVGhunter',
        },
        footer: {
        tagline: 'أيقونات SVG مجانية مصممة يدويًا للمطورين. ابحث، استعرض، وانسخ فورًا.',
        navigation: 'التنقل',
        resources: 'الموارد',
        language: 'اللغة',
        currentLang: 'اللغة الحالية',
        switchLang: 'EN',
        switchLangAria: 'التبديل إلى الإنجليزية',
        langEn: 'English',
        langAr: 'العربية',
        figma: 'الحصول على ملف Figma',
        support: 'الإبلاغ عن مشكلة',
        copyright: '© {{year}} SVGhunter. جميع الحقوق محفوظة.',
        madeBy: 'بُني بحب',
        },
        buymeacoffee: {
        label: 'ادعمني بقهوة',
        }
    },
},
}

const savedLanguage = localStorage.getItem('i18nextLng')
const supportedLanguages = ['en', 'ar']
const defaultLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en'

const syncDocumentLanguage = (lng) => {
    document.documentElement.lang = lng
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr'
}

i18n.use(initReactI18next).init(
    {
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    },
    () => {
    syncDocumentLanguage(i18n.language)
    },
)

i18n.on('languageChanged', (lng) => {
    if (supportedLanguages.includes(lng)) {
    localStorage.setItem('i18nextLng', lng)
}
    syncDocumentLanguage(lng)
})

export default i18n
