
import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook} from "./useNetwork";

const DEFAULT_HOOKS = {

    useAccount: () =>( {account: null})
}

export const setupHooks = (...deps) => {
   
    return {
        useAccount: createAccountHook(...deps),
        useNetwork: createNetworkHook(...deps)
    }
}