export const fetchBreedByName = async name => {
    const q = encodeURI(name)
    const request = await fetch('/api/breed?q=' + q, {
        method: 'GET',
    })

    return {
        ok: request.ok,
        data: await request.json(),
    }
}
