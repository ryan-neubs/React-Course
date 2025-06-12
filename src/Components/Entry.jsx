export default function Entry(props) {
    return (
        <>
            <article className="journal-entry">
                <img src={props.image} alt="Mount Fuji" />
                <div className="info-container">
                    <div className="location">
                        <img className="marker" src="./src/assets/marker.png" alt="Location Marker" />
                        <span className="country">{props.country.toUpperCase()}</span>
                        <a href={props.address}>View on Google Maps</a>
                    </div>
                    <h2>{props.location}</h2>
                    <time className="date">{props.date}</time>
                    <p>{props.description}</p>
                </div>
            </article>
        </>
    )
}