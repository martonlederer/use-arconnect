import { useEffect, useState } from "react";

const useArConnect = () => {
  const [arweaveWallet, setArweaveWallet] = useState<typeof window.arweaveWallet | undefined>();

  useEffect(() => {
    const loadWallet = () => setArweaveWallet(window.arweaveWallet);
    
    if (window.arweaveWallet) {
      loadWallet();
    } else {
      addEventListener("arweaveWalletLoaded", loadWallet);
    }
  });

  return arweaveWallet;
};

export default useArConnect;