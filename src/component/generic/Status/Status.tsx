import classNames from "classnames";
import './Status.scss';
function Status(props: any) {
    return (
        <div className={
            classNames(
                'Pastille',
                {
                    'Inprogress': props.status === 'IN PROGRESS',
                    'Completed': props.status === 'COMPLETED'
                }
            )}></div>
    )
}

export default Status;