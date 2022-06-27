import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getRaces } from "../../api/api";
import { IRace } from "../../models/IRace";
import { Content } from "../generic/loader/Content";
import Race from "./race/Race";
import './RacesList.scss'
function RaceList() {
    const [races, setRaces]: [IRace[], any] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRaces = useCallback(
        async () => {
            const result = await getRaces();
            setRaces(result.data);
            setLoading(false);
        }, []
    )

    useEffect(() => {
        fetchRaces();
    }, [fetchRaces]);

    return (
        <Content loading={loading}>
            <table className="RaceList u-full-width">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Statut</th>
                        <th className="hide-on-mobile">URL</th>
                        <th>Détail</th>
                    </tr>
                </thead>
                <tbody>
                    {races.map((race, i) => (
                        <Race key={i} race={race} />
                    ))}
                </tbody>
            </table>
        </Content>
    )
}

export default RaceList;