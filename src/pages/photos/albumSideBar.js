import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { getAlbums } from '../../api/AlbumApi'
import { AlbumRow } from './albumRow';

export const AlbumSideBar = (props) => {
    const [albums, setAlbums] = useState();

    async function getData() {
        const data = await getAlbums()
        setAlbums(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <ol>
            <li>
                <button onClick={props.onResetClick}>
                    <p>Reset</p>
                </button>
            </li>
            {albums && albums.map(e =>
                <li key={e.id}><AlbumRow data={e} onAlbumClick={props.onAlbumClick} /></li>)}
        </ol>
    )
}