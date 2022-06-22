import { useEffect } from "react"

import useSWR from 'swr';

const adminAddresses = {
    "0x02b5f709ddf2bcc3db59ab20d98db5443f536e902ebf34886fcb78d296dc32ce": true
}
export const handler = (web3, provider) => () => {

    const {data, mutate, ...rest } = useSWR(() => {
        return web3 ? "web3/accounts" : null
    },
        async () => {
            const accounts = await web3.eth.getAccounts()

            return accounts[0]
        }
    )




    useEffect(() => {
        provider && provider.on("accountsChanged", (accounts) => mutate(accounts[0]) ?? null)
    }, [provider])
    return {
        account: {
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        }
    }
}