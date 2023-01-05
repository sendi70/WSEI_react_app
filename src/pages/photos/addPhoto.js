import { addPhoto } from "../../api/PhotoApi"

const submitForm = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const response = await addPhoto(value);
    console.log(response)
    document.getElementById("status").innerText = "Added image with ID: " + response.id
}

export const AddPhotoView = () => {
    return (
        <>
            <form onSubmit={submitForm}>
                <label>Album Id:
                    <input type="text" id="albumId" name="albumId" />
                </label><br />
                <label>Title:
                    <input type="text" id="title" name="title" />
                </label><br />
                <label>Url:
                    <input type="text" id="url" name="url" />
                </label><br />
                <label>ThumbnailUrl:
                    <input type="text" id="thumbnailUrl" name="thumbnailUrl" />
                </label><br />
                <input type="submit" />
            </form>
            <label id="status"></label>
        </>
    )
}