export default function fetchBitcoin() {
  try {
    async function getBitcoin(url) {
      const response = await fetch(url);
      const json = await response.json();
      const btcPreco = document.querySelector(".btc-preco");

      btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);
    }
    getBitcoin("https://blockchain.info/ticker");
  } catch (error) {
    console.log(error);
  }
}
