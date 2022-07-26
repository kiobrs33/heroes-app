import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroeById } from '../../selectors/getHeroeById';

const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher
    } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-3">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`} desde Public/assets
                    src={heroImages(`./${id}.jpg`)}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-9">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter Ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b> First Appareance: </b> {first_appearance} </li>
                </ul>

                <h5>Characters</h5>
                <p> {characters} </p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>

        </div>
    )
}
