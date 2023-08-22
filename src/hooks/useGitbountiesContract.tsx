import { Contract } from "ethers";
import { useMemo } from "react";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";
import ABI from "@/abi/GitbountiesNFT.json";

const useGitbountiesContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () =>
      state.signer &&
      new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
        ABI.abi,
        state.signer
      ),
    [state.signer]
  );
};

export default useGitbountiesContract;
