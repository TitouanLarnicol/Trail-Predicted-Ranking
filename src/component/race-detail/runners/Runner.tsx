import { IRunner } from "../../../models/IRunner";

export default function Runner({ runner, index }: { runner: IRunner, index: number }) {
    return (
        <div >
            <span style={{ color: runner.gender === 'H' ? '#b1dae7' : '#ebb9cc' }}>{index}</span>
            <span> {runner.firstName} {runner.lastName} with ITRA {runner.pi} - {runner.ageGroup}</span>
        </div>
    )
}