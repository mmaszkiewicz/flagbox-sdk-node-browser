
const API_URL = 'api.flagbox.io'

function Client() {
    return {
        async verify<T>(flagKey: string, defaultValue: T, targeting: Record<string, string>): Promise<T> {
            const params = new URLSearchParams(targeting)
            const response = await fetch(API_URL + '?' + params.toString(), { method: "HEAD"})
            return response.headers['x-t-result'] || defaultValue
        }
    }
}