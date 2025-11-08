export const currencyRatesApi = {
  getCurrencyRates: async () => {
    const response = await fetch("https://api.fxratesapi.com/latest", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  },
};
