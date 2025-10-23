
function Image({src}) {
    return (
        <img src={src} style={{
            transform: 'scale(0.75)',
            maxWidth: 'auto',
            maxHeight: 'auto',
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block'
        }}/>
    );
}

export default Image;