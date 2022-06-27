import { IRunner } from "../../../models/IRunner";
import './Runner.scss';

export default function Runner({ runner, index }: { runner: IRunner, index: number }) {
    return (
        <div className="Runner">
            <div >
                <span className="Rank" style={{ color: runner.gender === 'H' ? '#318CE7' : '#ebb9cc' }}>{index}</span>
                <span className="Name"> {runner.firstName} {runner.lastName} - </span>
                <span className="Age">{runner.nationality} - </span>
                <span className="Age">{runner.ageGroup}</span>
            </div>
            <span className="Itra">{runner.pi}</span>
        </div>
    )
}