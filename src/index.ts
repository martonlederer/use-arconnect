import { useEffect, useState } from "react";

const useArConnect = () => {
  const [arweaveWallet, setArweaveWallet] = useState<typeof window.arweaveWallet | undefined>();

  useEffect(() => {
    const loadWallet = () => setArweaveWallet(window.arweaveWallet);
    window.addEventListener("arweaveWalletLoaded", loadWallet);

    return () => window.removeEventListener("arweaveWalletLoaded", loadWallet)
  });

  return arweaveWallet;
};

export default useArConnect;