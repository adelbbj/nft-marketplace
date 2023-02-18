import { CryptoHookFactory } from "@/types/hooks";
import useSWR from "swr";

// depencencies => provider, ethereum, contract (web3state)
export const hookFactory: CryptoHookFactory<string, string> =
  (deps) => (params) => {
    const swrRes = useSWR("web3/useAccount", () => {
      console.log(deps);
      console.log(params);

      return "test user";
    });

    return swrRes;
  };

export const useAccount = hookFactory({
  ethereum: undefined,
  provider: undefined,
});
