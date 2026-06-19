import { useCallback } from 'react'
import { useCopyToClipboard as useCopy } from '@uidotdev/usehooks'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export function useCopyToClipboard() {
    const { t } = useTranslation()
    const [copied, copy] = useCopy()
    const copyToClipboard = useCallback(
    (value, label) => {
    if (!value) {
        toast.error(t('clipboard.nothingToCopy'))
    return false
    }
    copy(value)
    toast.success(label ?? t('clipboard.copied'), { duration: 1400 })
    return true
    },
    [copy, t],
)
return { copied: Boolean(copied), copyToClipboard }
}
