
// ASSETS
import defaultBG from '../assets/background/hotel-blue-3-large.jpg'

const BGImage = (props) => {
    const defaults = {
        alt: 'Background image',
        className: 'bg-img',
        decoding: 'async',
        fetchPriority: 'auto',
        loading: 'lazy',
        bgImage: defaultBG
    }

    // merge defaults with any props passed in
    const settings = { ...defaults, ...props }

    return (
        <img
            alt={settings.alt}
            className={settings.className}
            decoding={settings.decoding}
            fetchPriority={settings.fetchPriority}
            loading={settings.loading}
            src={settings.bgImage}
        />
    )
}


export default BGImage