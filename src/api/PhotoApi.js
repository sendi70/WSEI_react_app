import { getAlbumsByUserId } from "./AlbumApi";

export const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
    return response;
}

export const getPhotoById = async (Id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + Id)
        .then((response) => response.json())
    return response;
}

export const deletePhotoById = async (Id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + Id, {
        method: 'DELETE',
    }).then((response) => response.json())
    return response;
}

export const getPhotosByAlbumId = async (Id) => {
    console.log(Id)
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + Id)
        .then((response) => response.json())
    return response;
}

export const addPhoto = async (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            albumId: data.albumId,
            title: data.title,
            url: data.url,
            thumbnailUrl: data.thumbnailUrl
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
export const getPhotosByUserId = async (Id) => {
    const albums = await getAlbumsByUserId(Id)
    let queryString = ""
    albums.forEach(element => {
        queryString += `albumId=${element.id}&`
    });
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?' + queryString)
        .then((response) => response.json())
    return response;
}
