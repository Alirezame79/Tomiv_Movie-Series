import { useState } from 'react';
import Modal from '../portal/Modal';
import ShowModal from '../portal/ShowModal';
import classes from './SearchResultCard.module.css';
import { useDispatch } from 'react-redux';
import { setMovie } from '../store/index';

export default function SearchResultCard({ movie }) {
    const [modal, setModal] = useState();
    // const dispatch = useDispatch();

    function movieCardClicked() {
        setModal(true)
        console.log('card clicked')
        // dispatch(setMovie(movie.imdb_id))
    }

    return (
        <>
            {modal && <ShowModal movie={movie.imdb_id} />}
            <div className={classes.card} onClick={movieCardClicked}>
                <h3 className={classes.name}>{movie.title}</h3>
                <h4 className={classes.year}>{movie.year}</h4>
            </div>
        </>

    );
}