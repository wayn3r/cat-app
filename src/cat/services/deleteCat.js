export const deleteCat = async id => {
    const request = await fetch('/api/cat', {
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
