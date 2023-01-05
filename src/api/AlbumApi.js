export const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
    return response;
}
export const getAlbumsByUserId = async (Id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + Id)
        .then((response) => response.json())
    return response;
}
