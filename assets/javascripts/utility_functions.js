// TODO: Constant here to be used everywhere
const tokenAddress = "0x29C89A2C13CA62A32dF148F4500fe3f526EF60d5";
const tokenSymbol = "PINU";
const tokenDecimals = 12;
const tokenImage = "https://pulseinu.org/assets/images/pinu_small.png";

async function addTokenFunction() {
  try {
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log("PINU Added to Metamask");
    } else {
      console.log("PINU Not Added to Metamask");
    }
  } catch (error) {
    console.log(error);
  }
}
