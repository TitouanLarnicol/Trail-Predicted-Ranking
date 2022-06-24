import { Fragment, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getRunnersFromRace } from "../../api/api";
import Chart from "./Chart";
import Runner from "./runners/Runner";
import './RaceDetail.scss';

function RaceDetail() {
    const search = useLocation().search;
    const [loading, setLoading] = useState(true);
    const [runners, setRunners] = useState([]);
    let { id } = useParams();
    const url = new URLSearchParams(search).get('url');

    useEffect(() => {
        async function fetchRace() {
            setLoading(true);
            const result = await getRunnersFromRace(id!, url!);
            setRunners(result.data)
            setLoading(false);
        }
        fetchRace();
    }, [id, url]);

    return (
        <Fragment>
            {
                loading ?
                    (<div>
                        Loading
                    </div>)
                    :
                    <div className="raceDetailContainer">
                        <div className="raceTitle">
                            {id} - <span>Classement provisoire</span>
                        </div>
                        <div className="raceDetail">
                            <div className="runnersList">
                                {
                                    runners.map((runner, index) => (
                                        <Runner key={index} runner={runner} index={index}></Runner>
                                    ))
                                }
                            </div>
                            <Chart data={runners} />
                        </div>
                    </div>
            }
        </Fragment>
    )
}

export default RaceDetail;