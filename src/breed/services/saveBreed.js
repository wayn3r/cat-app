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

    return {
        ok: request.ok,
        data: await request.json(),
    }
}
