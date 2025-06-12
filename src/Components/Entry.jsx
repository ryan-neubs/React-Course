export default function Entry(props) {
    const img = props.entry.img;
    const country = props.entry.country.toUpperCase();
    const mapsLink = props.entry.googleMapsLink;
    const title = props.entry.title;
    const dates = props.entry.dates;
    const text = props.entry.text;
    
    return (
        <>
            <article className="journal-entry">
                <img src={img.src} alt={img.alt} />
                <div className="info-container">
                    <div className="location">
                        <img className="marker" src="./src/assets/marker.png" alt="Location Marker" />
                        <span className="country">{country.toUpperCase()}</span>
                        <a href={mapsLink}>View on Google Maps</a>
                    </div>
                    <h2>{title}</h2>
                    <time className="date">{dates}</time>
                    <p>{text}</p>
                </div>
            </article>
        </>
    )
}