export const fetchCatById = async id => {
    const request = await fetch('/api/cat?id=' + id, {
        method: 'GET',
    })

    return {
        ok: request.ok,
        data: await request.json(),
    }
}
