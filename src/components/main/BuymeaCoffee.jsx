import { SiBuymeacoffee } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

const BuymeaCoffee = ({
    position = 'bottom-6 left-6',
    url = 'https://buymeacoffee.com/saidbourhabi',
}) => {
const { t } = useTranslation()
const label = t('buymeacoffee.label')

return (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={`group fixed z-40 flex items-center transition-transform duration-300 hover:scale-110 ${position}`}
        >
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#5b23ff] text-[#e4ff30] shadow-lg transition-all duration-300 hover:bg-white hover:text-black motion-safe:group-hover:animate-pulse">
            <SiBuymeacoffee className="text-2xl" />
        </div>
    </a>
)}

export default BuymeaCoffee
