export const AlbumRow = (props) => {
    return (
        <>
            <h4>{props.data.title}</h4>
            <button onClick={() => props.onAlbumClick(props.data.id)}>
                <p>Choose</p>
            </button>
        </>
    )
}