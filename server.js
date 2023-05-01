const rapidApiKey = "9431d30431mshb6y038cdf9f54f8paosdfkpodu14nmber3cn";

const url = "https://quotes15.p.rapidapi.com/quotes/random/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const obj = JSON.parse(result); // json dosyasını javascript objesıne cevirir.
    console.log(obj);
  } catch (error) {
    console.error(error);
  }
}
getData();
