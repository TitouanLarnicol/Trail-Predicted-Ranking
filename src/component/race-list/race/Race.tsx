import { FaLink, FaLock, FaRegFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IRace } from "../../../models/IRace";
import Status from "../../generic/Status/Status";
import './Race.scss'

function Race(props: { race: IRace }) {
    let navigate = useNavigate();
    const raceClicked = () => {
        navigate(`/race/${props.race.raceName}?url=${props.race.url}`);
    }

    return (
        <tr className="Race">
            <td>{props.race.raceName}</td>
            <td>
                <div className="Status">
                    <Status status={props.race.status} />
                    <span>{props.race.status}</span>
                </div>
            </td>
            <td className="RaceUrl hide-on-mobile"><a href={props.race.url} target="blank"><FaLink></FaLink></a></td>
            <td>
                {props.race.status === 'IN PROGRESS' ? <FaLock /> : <FaRegFolderOpen onClick={raceClicked} className="CheckIcon" />}
            </td>
        </tr>
    )
}

export default Race;