import { useParams } from "react-router-dom";

function Member({ houses }) {
    const { houseId, memberId } = useParams();
    const foundHouse = houses.find((house) => house.id.toString() === houseId);
    const foundMember = foundHouse.people.find(
        (person) => person.id.toString() === memberId
    );
    console.log(foundMember)
    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name: {foundMember.name}</h2>
            </div>
            <div className="desc">A description: {foundMember.description}</div>
        </div>
    );
}

export default Member;
