import { useParams } from "react-router-dom";

function House({ houses }) {
    const { id } = useParams();
    const foundHouse = houses.find(house => house.id.toString() === id)
    const membersMap = foundHouse.people.map(member => {
        return(
            <li>
                {member.name}
            </li>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of House {foundHouse.name}</h2>
            </div>
            <h2>List of House members:</h2>
            <ul className="list">{membersMap}</ul>
        </div>
    );
}

export default House;
