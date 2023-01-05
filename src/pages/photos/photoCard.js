export const PhotoCard = (props) => {
    return (
        <div key={props.data.id}>
            <h3>{props.data.title}</h3>
            <img src={props.data.thumbnailUrl} />
            {props.userAlbum?.includes(props.data.albumId) && <button>Delete</button>}
        </div>
    );
}