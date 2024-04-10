import "./Show.scss";

const Show = ({ show }) => {
    return (
        <div className="Show">
            <div className="inner">
                <div className="left">
                    <div className="left-top">{show.date}</div>
                    <div className="left-bottom">{show.time}</div>
                </div>
                <div className="center">
                    <div className="center-top">{show.name}</div>
                    <div className="center-bottom">{show.venue} <span>({show.location})</span></div>
                </div>
                <div className="right">
                    {show.link ? <a href={show.link}>TICKETS</a> : <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7qc131OjflHLorLBeXMMc7lx8G7EhZSZUwEzc-gFgTz4hUQ/viewform">FIND OUT FIRST</a>}
                </div>
            </div>
        </div>
    )
}

export default Show;