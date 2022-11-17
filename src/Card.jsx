function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={`/${props.item.imageFile}`} alt="Mount Fuji" />
            <div className="card__body">
                <div className="card__body-location">
                    <img className="map-icon" src="/map-marker.png" />
                    <span className="location-text">{props.item.location}</span>
                    <a className="location-link" href={props.item.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className="card__body-title">
                    {props.item.title}
                </h2>
                <p className="card__body-dates">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className="card__body-desc">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}

export default Card