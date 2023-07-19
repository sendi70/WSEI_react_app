import { deletePhotoById } from "../../api/PhotoApi";
import "../../styles/photocard.css";

const deletePhoto = async (id) => {
    const response = await deletePhotoById(id).then(() => {
        alert("Photo deleted successfully")
    });
}

export const PhotoCard = (props) => {
    return (
        <div key={props.data.id} className="photoCard">
            <h3>{props.data.title}</h3>
            <img src={props.data.thumbnailUrl} />
            {props.userAlbum?.includes(props.data.albumId) && <button onClick={() => deletePhoto(props.data.id)}>Delete</button>}
        </div>
    );
}