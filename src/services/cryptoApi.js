
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi =createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query: (coinId)=> createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod})=> createRequest(`/coin/${coinId}/history/${timePeriod}`),
        }),
    })
})

//redux toolkit creates a hook that you can call instantly to get all data of query
//they also give loading state, finalize state
export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
}=cryptoApi;
