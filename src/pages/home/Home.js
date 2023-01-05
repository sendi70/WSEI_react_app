import React from 'react'
import { getUserByName } from '../../api/UsersApi';

export const Home = (props) => {
    const submitForm = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        const response = await getUserByName(value.name);
        if (response.length > 0) {
            localStorage.setItem("username", response[0].username)
            localStorage.setItem("userId", response[0].id)
            props.onLogin(true);
        }
    }
    return (<div style={{ textAlign: "center" }}>
        <h1>

            {localStorage.getItem("username") ? (
                <p>Welcome {localStorage.getItem("username")}!</p>) :
                <form onSubmit={submitForm}>
                    <label>Name:
                        <input type="text" id="name" name="name" />
                    </label><br />
                    <input type="submit" />
                </form>
            }

        </h1>
    </div>
    );
}