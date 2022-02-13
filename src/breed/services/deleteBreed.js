export const deleteBreed = async id => {
    if (!id) {
        throw new Error('No breedId found')
    }
    const request = await fetch('/api/breed', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return {
        ok: request.ok,
        data: await request.json(),
    }
}
