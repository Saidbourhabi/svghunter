import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Header() {
const { t } = useTranslation()

const navigation = [
    { nameKey: 'header.home', href: '/' },
    { nameKey: 'header.docs', href: '/documentation' },
]
return (
    <Disclosure
        as="nav"
        className="relative bg-[#5b23ff] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-white hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">{t('header.openMenu')}</span>
                    <FaBars aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <FaTimes aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex shrink-0 items-center gap-2">
                <img alt={t('header.logoAlt')} src="/hunter.svg" className="h-8 w-8" />
            <span className="hidden text-m text-[#e4ff30] sm:inline">SVGHUNTER</span>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                {navigation.map((item) => (
                    <NavLink
                    key={item.nameKey}
                    to={item.href}
                    end
                    className={({ isActive }) =>
                    classNames(
                        isActive
                            ? 'bg-black text-white'
                            : 'text-[#e4ff30] hover:bg-black/10',
                        'rounded px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]',
                    )}>
                    {t(item.nameKey)}
                    </NavLink>
                ))}
                </div>
            </div>
            </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
                href="https://github.com/Saidbourhabi/svghunter"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-1 text-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">GitHub</span>
                <FaGithub aria-hidden="true" className="size-6" />
            </a>
            </div>
            </div>
        </div>

        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
                <DisclosureButton
                    key={item.nameKey}
                    as={NavLink}
                    to={item.href}
                    end
                    className={({ isActive }) =>
                    classNames(
                    isActive ? 'bg-black/80 text-white' : 'text-white hover:bg-black/10',
                    'block rounded px-3 py-2 text-base font-medium',
                    )}>
                    {t(item.nameKey)}
                </DisclosureButton>
            ))}
            </div>
        </DisclosurePanel>
    </Disclosure>
)
}
