import { useTranslation } from 'react-i18next'
import { TbMoodSearch } from 'react-icons/tb'

export default function SearchBar({ query, onSearch }) {
const { t } = useTranslation()
return (
    <div className="mx-auto w-full max-w-3xl">
        <label htmlFor="icon-search" className="sr-only">
            {t('home.searchLabel')}
        </label>
        <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white">
            <TbMoodSearch  className="text-lg text-white" />
        </span>
        <input
            id="icon-search"
            type="search"
            value={query}
            onChange={(event) => onSearch(event.target.value)}
            placeholder={t('home.searchPlaceholder')}
            className="w-full rounded border border-white bg-[#5b23ff] py-4 pl-14 pr-4 text-base text-white outline-none transition focus:border-white focus:ring-1 focus:ring-white"
        />
        </div>
    </div>
)}
