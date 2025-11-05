
function Image({src}) {
    return (
        <img src={src} style={{
            transform: 'scale(1)',
            maxWidth: 'auto',
            maxHeight: 'auto',
            objectFit: 'contain',
            margin: '0 auto var(--ifm-leading) 0',
            display: 'block'
        }}/>
    );
}

export default Image;