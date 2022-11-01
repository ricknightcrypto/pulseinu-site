
// TODO: Constant here to be used everywhere
const tokenAddress = "0xCaB910925CD92DA4aD5F7D3F1b97078fC43328CB";
const tokenSymbol = "PINU";
const tokenDecimals = 12;
const tokenImage = "https://pulseinu.org/assets/images/pinu_small.png";

async function addTokenFunction() {

  try {
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log('PINU Added to Metamask');
    } else {
      console.log('PINU Not Added to Metamask');
    }
  } catch (error) {
    console.log(error);
  }
  }
