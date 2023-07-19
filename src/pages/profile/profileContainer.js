import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { getUserByName, updateUserInfo } from "../../api/UsersApi";
import { UserData } from "./userData";

export const ProfileContainer = (props) => {
    const [userData, setUserData] = useState();
    const [isEditting, setIsEditing] = useState(false);

    const getUserData = async () => {
        console.log("getUserData")
        setUserData((await getUserByName(localStorage.getItem("username")))[0])
    }

    const submitForm = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append("id", localStorage.getItem("userId"))
        const value = Object.fromEntries(data.entries());
        const response = await updateUserInfo(value);
        console.log(response)
        if (response !== {}) {
            document.getElementById("status").innerText = `Updated user ${response.name} succesfully`
            setIsEditing(state => !state)
        }
    }

    useEffect(() => {
        getUserData();
    }, []);
    useEffect(() => {
        console.log("renders");
    });

    useEffect(() => {
        if (!props.isLogged) {
            redirect("/")
        }
    }, [props.isLogged])

    return (
        <div className="userContainer">
            {userData &&
                [!isEditting ?
                    <>
                        <UserData userData={userData} />
                        <button onClick={() => { setIsEditing(state => !state) }}>EditUser</button>
                    </>
                    :
                    <>
                        <form onSubmit={submitForm}>
                            <label>Name:
                                <input type="text" id="name" name="name" defaultValue={userData.name} />
                            </label><br />
                            <label>Username:
                                <input type="text" id="username" name="username" defaultValue={userData.username} />
                            </label><br />
                            <label>Email:
                                <input type="text" id="email" name="email" defaultValue={userData.email} />
                            </label><br />
                            <label>Address:<br />
                                * Street: <input type="text" id="street" name="street" defaultValue={userData.address.street} /><br />
                                * Suite: <input type="text" id="suite" name="suite" defaultValue={userData.address.suite} /><br />
                                * City: <input type="text" id="city" name="city" defaultValue={userData.address.city} /><br />
                                * Zipcode: <input type="text" id="zipcode" name="zipcode" defaultValue={userData.address.zipcode} /><br />
                            </label><br />
                            <label>Phone:
                                <input type="text" id="phone" name="phone" defaultValue={userData.phone} />
                            </label><br />
                            <label>Website:
                                <input type="text" id="website" name="website" defaultValue={userData.website} />
                            </label><br />
                            <label>Company:<br />
                                * Name: <input type="text" id="compName" name="compName" defaultValue={userData.company.name} /><br />
                                * Catch phrase: <input type="text" id="catchPhrase" name="catchPhrase" defaultValue={userData.company.catchPhrase} /><br />
                                * BS: <input type="text" id="bs" name="bs" defaultValue={userData.company.bs} /><br />
                            </label><br />

                            <input type="submit" />
                        </form>
                    </>]
            }
            <label id="status"></label>
        </div>
    );
}