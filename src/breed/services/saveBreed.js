export const saveBreed = async name => {
    if (!name) {
        throw new Error('No name found')
    }
    const request = await fetch('/api/breed', {
        method: 'POST',
        body: JSON.stringify({
            name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!request.ok) {
        const response = await request.json()
        throw new Error(JSON.parse(response))
    }

    const breed = await request.json()
    return breed
}
