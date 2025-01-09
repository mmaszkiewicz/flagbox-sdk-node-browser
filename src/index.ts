function Client(apiUrl: string, apiKey: string) {
  return {
    async verify<T>(flagKey: string, defaultValue: T, targeting: Record<string, string>): Promise<T> {
      const params = new URLSearchParams(targeting);
      const response = await fetch(apiUrl + '?' + params.toString(), {
        method: 'HEAD', headers: {
          'x-api-key': apiKey
        }
      });
      return response.headers['x-t-result'] || defaultValue;
    }
  };
}