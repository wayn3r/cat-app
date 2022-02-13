export const fetchAllCats = async () => {
    const request = await fetch('/api/cat', {
        method: 'GET',
    })
    return {
        ok: request.ok,
        data: await request.json(),
    }
}
