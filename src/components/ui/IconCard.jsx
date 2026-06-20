import { memo } from 'react'

function IconCard({ icon, onSelect }) {
return (
    <button
        type="button"
        onClick={() => onSelect(icon)}
        className="group flex flex-col items-stretch overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        aria-label={`Open details for ${icon.name}`}
        fetchPriority="high"
        >
        <div className="flex h-30 cursor-pointer items-center justify-center rounded-2xl border-2 border-[#5b23ff] bg-[#eeeeee] text-black transition hover:border-black">
        <div
            className="w-10 transition-transform duration-150 group-hover:scale-108 group-hover:text-[#5b23ff]"
            dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
            aria-hidden="true"
            fetchPriority="high"
        />
        </div>
        <div className="cursor-pointer px-4 py-3 text-center text-sm text-[#5b23ff]">
            {icon.name}
        </div>
    </button>
)}
export default memo(IconCard)
