export function createdUrl(shortCode: string) {
    const url = `http://localhost:3000/api/url/${shortCode}`

    return url
}