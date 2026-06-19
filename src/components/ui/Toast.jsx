import { Toaster } from 'react-hot-toast'

export default function Toast() {
return (
    <Toaster
        position="bottom-right"
        toastOptions={{
        duration: 1800,
        style: {
        background: '#5b23ff',
        color: '#ffffff',
        border: '2px solid #ffffff',
        },
    }}
    />
)
}
