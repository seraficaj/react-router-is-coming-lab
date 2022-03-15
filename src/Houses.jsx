import { Link } from "react-router-dom";

function Houses({ houses }) {
    const housesMap = houses.map((house) => {
        return (
            <li>
                <Link to={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        );
    });
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">{housesMap}</ul>
        </div>
    );
}

export default Houses;
