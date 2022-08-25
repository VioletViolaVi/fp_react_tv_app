import React from 'react';
import { useSelector } from 'react-redux';
import { Header, ShowCard } from '../../components';

const FavouritePage = () => {

    const favourites = useSelector(state => state.watchlist);

    return <>
            <Header />
            { favourites ? favourites.map(s => <ShowCard key={s.id} data={s} />) : <em>You have no shows saved.</em> }
           </>

}

export default FavouritePage;
