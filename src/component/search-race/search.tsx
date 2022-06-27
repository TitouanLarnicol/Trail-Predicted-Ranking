import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRunnersFromRace } from "../../api/api";
import { Error } from "../generic/404/404";
import { ErrorId } from "../generic/ErrorId";
import "./Search.scss";
function SearchRace() {
    const [{ loading, error }, setLoading]: [{ loading: boolean, error: ErrorId | null }, any] = useState({ loading: false, error: null });
    const [race, setRace] = useState('');
    const [url, setUrl] = useState('');
    let navigate = useNavigate();

    const onUrlChange = (e: SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        setUrl(target.value);
    }
    const onRaceChange = (e: SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        setRace(target.value);
    }

    const onSubmit = async () => {
        try {
            setLoading({ loading: true, error: null });
            await getRunnersFromRace(race, url);
            setLoading({ loading: false, error: '' });
            navigate('/');
        } catch (err: any) {
            setLoading({ loading: false, error: err?.response?.data?.errorId });
            console.log(loading, error, error)
        }
    }

    return (
        <div className="SearchForm">
            <form >
                <div className="row">
                    <div className="u-full-width">
                        <label >URL du site d'inscription</label>
                        <input disabled={loading} className="u-full-width" type="url" placeholder="https://livetrail.com" id="raceId" onChange={onUrlChange} />
                    </div>
                </div>
                <label>Nom de l'épreuve</label>
                <input disabled={loading} className="u-full-width" type="text" placeholder="UTMB" id="urlId" onChange={onRaceChange} />
                <input disabled={loading} className="button-primary" type="submit" value="Analyser" onClick={onSubmit} />
            </form>
            {
                error ? <Error errorId={error} /> : null
            }
            <div className="Helper">
                Pour l'instant, seuls les sites <a target="blank" href={"https://livetrack.me/fr/evenements"}>live track</a> et <a target="blank" href={"https://www.livetrail.net/"}>live trail</a> sont
                disponibles. N'hésitez pas à m'envoyer les plateformes à ajouter via <a href="mailto:larnicol.titouan.38@gmail.com">mail</a>.
            </div>
        </div>
    )
}

export default SearchRace;