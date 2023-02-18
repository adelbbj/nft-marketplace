import { CryptoHookFactory } from "@/types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string, string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;
// depencencies => provider, ethereum, contract (web3state)
export const hookFactory: AccountHookFactory = (deps) => (params) => {
  const swrRes = useSWR("web3/useAccount", () => {
    console.log(deps);
    console.log(params);

    return "test user";
  });

  return swrRes;
};

// export const useAccount = hookFactory({
//   ethereum: undefined,
//   provider: undefined,
// });
