export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
    return response;
}

export const getUserByName = async (username) => {
    return await fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
        .then((response) => response.json())
}

export const updateUserInfo = async (data) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + data.id, {
        method: 'PATCH',
        body: JSON.stringify({
            id: data.id,
            name: data.name,
            username: data.username,
            email: data.email,
            address: {
                street: data.street,
                suite: data.suite,
                city: data.city,
                zipcode: data.zipcode,
            },
            phone: data.phone,
            website: data.website,
            company: {
                name: data.compName,
                catchPhrase: data.catchPhrase,
                bs: data.bs
            }
        },),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}