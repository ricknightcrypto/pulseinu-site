// TODO: Constant here to be used everywhere
const tokenAddress = "0xd04F1f1D2861A6D023E328a7fCFc105fa4766012";
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
