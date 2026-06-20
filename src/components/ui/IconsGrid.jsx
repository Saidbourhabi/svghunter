import IconCard from './IconCard'

export default function IconsGrid({ icons, onSelect }) {
return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-6">
        {icons.map((icon) => (
        <IconCard key={icon.id} icon={icon} onSelect={onSelect} />
        ))}
    </div>
)}
