import './Content.scss';

export function Content(props: any) {
    return (
        <>
            {props.loading ?
                <div className="lds-facebook"><div></div><div></div><div></div></div> :
                props.children
            }
        </>

    );
}