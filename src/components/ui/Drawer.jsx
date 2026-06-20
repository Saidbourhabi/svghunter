import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { BsFiletypeJsx, BsFiletypeSvg } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

export default function Drawer({ open, onClose, icon }) {
const { t } = useTranslation()
const { copyToClipboard } = useCopyToClipboard()

return (
    <Transition.Root show={open && icon !== null} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-6">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  {icon && (
                    <div className="flex h-full flex-col overflow-y-auto bg-[#eeeeee] border-l-2 border-[#5b23ff] text-[#5b23ff]">
                      <div className="flex items-center justify-between border-b-2 border-[#5b23ff] px-6 py-5">
                        <Dialog.Title className="text-lg ">{icon.name}</Dialog.Title>
                        <button
                          type="button"
                          onClick={onClose}
                          className="cursor-pointer p-2 text-[#5b23ff ] transition hover:bg-[#5b23ff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ff30]"
                        >
                          <span className="sr-only">{t('drawer.close')}</span>
                          <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="space-y-6 p-6">
                        <div className="mx-auto flex h-65 w-65 items-center justify-center rounded border-2 border-[#5b23ff] bg-white">
                          <div
                            className="h-28 w-28"
                            fetchPriority="high"
                            dangerouslySetInnerHTML={{ __html: icon.svgRaw }}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm text-[#5b23ff]">{icon.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {icon.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border-2 border-[#5b23ff] rounded text-[#5b23ff] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(icon.svgRaw, t('drawer.svgCopied'))
                            }
                            className="inline-flex rounded cursor-pointer items-center justify-center gap-2 bg-[#5b23ff] px-4 py-3 text-sm text-white hover:text-[#5b23ff] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            <BsFiletypeSvg className="h-5 w-5" aria-hidden="true" />
                            {t('drawer.copySvg')}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(icon.jsxCode, t('drawer.jsxCopied'))
                            }
                            className="inline-flex rounded cursor-pointer items-center justify-center gap-2 bg-white px-4 py-3 text-sm text-[#5b23ff] hover:text-white transition hover:bg-[#5b23ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]"
                          >
                            <BsFiletypeJsx className="h-5 w-5" aria-hidden="true" />
                            {t('drawer.copyJsx')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
        </Dialog>
    </Transition.Root>
)}
