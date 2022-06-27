import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getRunnersFromRace } from "../../api/api";
import Chart from "./Chart";
import Runner from "./runners/Runner";
import './RaceDetail.scss';
import { IRunner } from "../../models/IRunner";
import { Content } from "../generic/loader/Content";

function RaceDetail() {
    const search = useLocation().search;
    const [loading, setLoading] = useState(true);
    const [runners, setRunners] = useState([] as IRunner[]);
    let { id } = useParams();
    const url = new URLSearchParams(search).get('url');

    useEffect(() => {
        async function fetchRace() {
            const result = await getRunnersFromRace(id!, url!);
            setRunners(mapResults(result.data))
            setLoading(false);
        }
        fetchRace();
    }, [id, url]);

    function mapResults(data: IRunner[]): IRunner[] {
        return data
            .sort((a, b) => {
                if (a.pi > b.pi) return -1;
                if (a.pi < b.pi) return 1;
                return 0;
            });
    }

    return (
        <Content loading={loading}>
            <div className="raceDetailContainer">
                <div className="raceTitle">
                    <span>{id}</span>
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
        </Content>
    )
}

export default RaceDetail;