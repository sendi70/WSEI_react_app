import React, { useEffect, useState } from 'react'

export const UserData = (props) => {
    const [userData, setUserData] = useState(props.userData);

    useEffect(() => setUserData(props.userData), [props.userData]);


    return (
        userData &&
        <>
            <p>Name: {userData.name}</p>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Address:<br />
                * Street: {userData.address.street},<br />
                * Suite: {userData.address.suite},<br />
                * City: {userData.address.city},<br />
                * Zipcode: {userData.address.zipcode}<br />
            </p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
            <p>Company:<br />
                * Name: {userData.company.name},<br />
                * Catch phrase: {userData.company.catchPhrase},<br />
                * Balance Sheet? {userData.company.bs},<br />
            </p>
        </>
    );
}