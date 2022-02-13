export const saveCat = async ({ id, name, breedId, description, latitude, longitude }) => {
    const request = await fetch('/api/cat', {
        method: !id ? 'POST' : 'PUT',
        body: JSON.stringify({
            id,
            name,
            breedId,
            description,
            latitude,
            longitude,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return {
        ok: request.ok,
        data: await request.json(),
    }
}
