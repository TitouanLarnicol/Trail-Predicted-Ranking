import { FaExclamationTriangle } from "react-icons/fa";
import { ErrorId, getErrorLabel } from "../ErrorId";
import './404.scss';

export function Error({ errorId }: { errorId: ErrorId }) {

    return (
        <div className="Error">
            <FaExclamationTriangle />
            <span>
                {getErrorLabel(errorId)}
            </span>
        </div>
    )
}