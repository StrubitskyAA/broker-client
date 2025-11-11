const mainUrl = "https://api.vatcomply.com/rates";
// const alternativeUrl = "https://api.fxratesapi.com/latest";

export const currencyRatesApi = {
  getCurrencyRates: async () => {
    const response = await fetch(mainUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  },
};
