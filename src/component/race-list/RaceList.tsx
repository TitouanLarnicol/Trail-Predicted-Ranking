import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getRaces } from "../../api/api";
import { IRace } from "../../models/IRace";
import Race from "./race/Race";
import './RacesList.scss'
function RaceList() {
    const [races, setRaces]: [IRace[], any] = useState([]);

    const fetchRaces = useCallback(
        async () => {
            const result = await getRaces();
            setRaces(result.data);
        }, []
    )

    useEffect(() => {
        fetchRaces();
    }, [fetchRaces]);

    return (
        <table className="RaceList u-full-width">
            <thead>
                <tr>
                    <th>Race Name</th>
                    <th>Status</th>
                    <th className="hide-on-mobile">URL</th>
                    <th>Check</th>
                </tr>
            </thead>
            <tbody>
                {races.map((race, i) => (
                    <Race key={i} race={race} />
                ))}
            </tbody>
        </table>
    )
}

export default RaceList;