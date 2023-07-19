import React, { useEffect, useState } from 'react'
import { getPhotoById, getPhotosByAlbumId } from '../../api/PhotoApi';
import { getUserByName } from '../../api/UsersApi';
import { UserData } from '../profile/userData';
import { PhotoCard } from "../photos/photoCard";
import { PaginatedItems } from "../../shared/Pagination/PaginatedItems"


export const SearchPage = (props) => {
    const [selectedOption, setSelectedOption] = useState('user')
    const [data, setData] = useState('');

    const search = async () => {

        selectedOption === 'user' ?
            setData((await getUserByName(document.getElementById('username').value))[0]) :
            selectedOption === 'photoId' ?
                setData((await getPhotoById(document.getElementById('photoId').value))) :
                setData((await getPhotosByAlbumId(document.getElementById('albumId').value)))
    }

    return (<div style={{ textAlign: "center" }}>
        <div className={'searchForm'}>
            {selectedOption === 'user' ?
                <label htmlFor={'username'}>Username <input type={'text'} id={'username'} /></label> :
                selectedOption === 'photoId' ?
                    <label htmlFor={'photoId'}>PhotoId <input type={'text'} id={'photoId'} /></label> :
                    <label htmlFor={'albumId'}>AlbumId <input type={'text'} id={'albumId'} /></label>
            }
            <button type="button" onClick={search}>Search</button>
        </div>
        <p>Search by: </p>
        <div className={'searchForm'}>
            <label htmlFor={'user'}>User <input type={'radio'} id={'user'} value={'user'} checked={selectedOption === 'user'} onChange={() => { setData(''); setSelectedOption('user') }} /></label>
            <label htmlFor={'photoById'}>Photo by ID <input type={'radio'} id={'photoById'} value={'photoId'} checked={selectedOption === 'photoId'} onChange={() => { setData(''); setSelectedOption('photoId') }} /></label>
            <label htmlFor={'photoAlbum'}>Photo by AlbumId <input type={'radio'} id={'photoAlbum'} value={'photoAlbum'} checked={selectedOption === 'photoAlbum'} onChange={() => { setData(''); setSelectedOption('photoAlbum') }} /></label>
        </div>

        <div className={'content'}>
            {(selectedOption === 'user' && data !== '') && <UserData userData={data} />}
            {(selectedOption === 'photoId' && data !== '') && <PhotoCard data={data} />}
            {(selectedOption === 'photoAlbum' && data !== '') && <PaginatedItems itemsData={data} itemsPerPage={10} renderItem={PhotoCard} />}
        </div>
    </div>
    );
}