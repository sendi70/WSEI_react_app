import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { getPhotos, getPhotosByAlbumId, getPhotosByUserId } from "../../api/PhotoApi";
import { PhotoCard } from "./photoCard";
import { PaginatedItems } from "../../shared/Pagination/PaginatedItems"
import { AlbumSideBar } from './albumSideBar';
import { getUsers } from '../../api/UsersApi';
import { Link } from 'react-router-dom';
import { getAlbumsByUserId } from '../../api/AlbumApi';


export const PhotosContainer = (props) => {
    const [photos, setPhotos] = useState();
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState()
    const [userAlbums, setUserAlbums] = useState([])

    async function getData() {
        const data = await getPhotos()
        setUserAlbums((await getAlbumsByUserId(localStorage.getItem("userId"))).map(x => x.id))
        console.log("ASD")
        setPhotos(data)
    }
    async function getUsersData() {
        const data = await getUsers()
        setUsers(data)
    }
    const onAlbumClick = async (e) => {
        const data = await getPhotosByAlbumId(e)
        console.log(data)
        setPhotos(data)
    };
    const onUserSelect = async (e) => {
        const data = await getPhotosByUserId(e.target.value)
        setSelectedUser(e.target.value)
        console.log(data)
        setPhotos(data)
    }
    const resetAlbumChoose = () => {
        getData()
    }
    useEffect(() => {
        getUsersData()
        getData()
    }, [props.isLogged])
    return (
        <div class="content">
            <div>
                <Link className="menu-link" to="/photos/Add">
                    <button>Add new photo</button>
                </Link>
                {users &&
                    <select value={selectedUser} onChange={onUserSelect}>
                        {users.map((option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                    </select>}
            </div>
            <div className="photos-container">
                <AlbumSideBar onAlbumClick={onAlbumClick} onResetClick={resetAlbumChoose} />
                {photos != undefined &&
                    <div>
                        <PaginatedItems itemsData={photos} itemsPerPage={10} renderItem={PhotoCard} albums={userAlbums} />
                    </div>}
            </div>
        </div>
    );
}