import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
en: {
    translation: {
    meta: {
        homeTitle: 'SVGhunter | Free SVG Icons',
        homeDescription:
        'A lightweight icon library for developers. Search clean SVG assets, preview each shape, and copy SVG or JSX instantly.',
        docsTitle: 'Documentation | SVGhunter',
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
    home: {
        heroBadge: 'Free hand-crafted assets',
        heroTitle: 'Free hand-crafted SVG icons',
        heroSubtitle:
        'lightweight icon library for developers. Search clean SVG assets, preview each shape, and copy SVG or JSX instantly.',
        searchLabel: 'Search icons',
        searchPlaceholder: 'Search all icons...',
        sectionLabel: 'Icon library',
        sectionTitle: 'Browse the collection and open any icon to copy.',
        iconsAvailable: 'icons',
        noIconsMessage: 'No icons matched your search. Try a different tag or name.',
    },
    drawer: {
        close: 'Close drawer',
        copySvg: 'Copy SVG',
        copyJsx: 'Copy JSX',
        svgCopied: 'SVG copied',
        jsxCopied: 'JSX copied',
    },
    clipboard: {
        copied: 'Copied to clipboard',
        nothingToCopy: 'Nothing to copy',
    },
    docs: {
        title: 'Documentation',
        intro:
        'SVGhunter is a lightweight SVG icon browser. Search the collection, open any icon, and copy the markup as SVG or JSX.',
        step1: 'Browse or search icons on the home page.',
        step2: 'Click an icon to open the detail drawer and preview it.',
        step3: 'Use Copy SVG or Copy JSX to paste the markup into your project.',
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
        homeTitle: 'SVGhunter | أيقونات SVG مجانية',
        homeDescription:
        'مكتبة أيقونات خفيفة للمطورين. ابحث عن أيقونات SVG نظيفة، استعرض كل شكل، وانسخ SVG أو JSX فورًا.',
        docsTitle: 'التوثيق | SVGhunter',
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
    home: {
        heroBadge: 'أصول مجانية مصممة يدويًا',
        heroTitle: 'أيقونات SVG مجانية مصممة يدويًا',
        heroSubtitle:
        'مكتبة أيقونات خفيفة للمطورين. ابحث عن أيقونات SVG نظيفة، استعرض كل شكل، وانسخ SVG أو JSX فورًا.',
        searchLabel: 'ابحث في الأيقونات',
        searchPlaceholder: 'ابحث عن أيقونات بالاسم',
        sectionLabel: 'مكتبة الأيقونات',
        sectionTitle: 'تصفح المجموعة وافتح أي أيقونة للنسخ.',
        iconsAvailable: 'أيقونات',
        noIconsMessage: 'لم يتم العثور على أيقونات مطابقة لبحثك. جرّب علامة أو اسمًا مختلفًا.',
    },
    drawer: {
        close: 'إغلاق الدرج',
        copySvg: 'نسخ SVG',
        copyJsx: 'نسخ JSX',
        svgCopied: 'تم نسخ SVG',
        jsxCopied: 'تم نسخ JSX',
    },
    clipboard: {
        copied: 'تم النسخ إلى الحافظة',
        nothingToCopy: 'لا يوجد شيء للنسخ',
    },
    docs: {
        title: 'التوثيق',
        intro:
        'SVGhunter متصفح خفيف لأيقونات SVG. ابحث في المجموعة، افتح أي أيقونة، وانسخ الترميز كـ SVG أو JSX.',
        step1: 'تصفح أو ابحث عن الأيقونات في الصفحة الرئيسية.',
        step2: 'انقر على أيقونة لفتح درج التفاصيل ومعاينتها.',
        step3: 'استخدم نسخ SVG أو نسخ JSX للصق الترميز في مشروعك.',
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
        copyright: '© {{year}} SVGhunter. جميع الحقوق محفوظة.',
        madeBy: 'بُني بحب',
    },
    buymeacoffee: {
        label: 'ادعمني بقهوة',
    },
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
