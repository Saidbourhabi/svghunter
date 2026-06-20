import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { createFuseSearch } from '../../utils/fuseSearch'
import icons from '../../output/icons'
import SearchBar from '../../components/ui/SearchBar'
import IconsGrid from '../../components/ui/IconsGrid'
import Drawer from '../../components/ui/Drawer'

const Home = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [selectedIcon, setSelectedIcon] = useState(null)
  const debouncedQuery = useDebounce(query, 220)

  const fuse = useMemo(() => createFuseSearch(icons), [])

  const filteredIcons = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return icons
    }
    return fuse.search(debouncedQuery).map((result) => result.item)
  }, [debouncedQuery, fuse])

  const handleSelectIcon = useCallback((icon) => {
    setSelectedIcon(icon)
  }, [])

  const handleCloseDrawer = useCallback(() => {
    setSelectedIcon(null)
  }, [])

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDescription')} />
      </Helmet>
      {/* //*hero section */}
      <section className="bg-[#5b23ff]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[#e4ff30]">
              {t('home.heroBadge')}
            </p>
            <h1 className="mt-6 text-4xl text-white sm:text-6xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              {t('home.heroSubtitle')}
            </p>
          </div>
          <div className="mt-10">
            <SearchBar query={query} onSearch={setQuery} />
          </div>
        </div>
      </section>
      {/* //*icons layout */}
      <section className="bg-[#eeeeee] py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#5b23ff]">
                {t('home.sectionLabel')}
              </p>
              <h2 className="mt-3 text-3xl tracking-tigh">
                {t('home.sectionTitle')}
              </h2>
            </div>
            <div
              className="w-fit inline-flex items-center rounded bg-[#5b23ff] px-4 py-2 text-sm font-medium text-white"
              aria-live="polite"
            >
              {filteredIcons.length} {t('home.iconsAvailable')}
            </div>
          </div>
          {/* // *icons grid */}
          {filteredIcons.length === 0 ? (
            <div className="p-12 text-center text-[#5b23ff]">{t('home.noIconsMessage')}</div>
          ) : (
            <IconsGrid icons={filteredIcons} onSelect={handleSelectIcon} />
          )}
        </div>
      </section>
      {/* // *Drawer menu */}
      <Drawer
        open={selectedIcon !== null}
        onClose={handleCloseDrawer}
        icon={selectedIcon}
      />
    </main>
  )
}

export default Home
