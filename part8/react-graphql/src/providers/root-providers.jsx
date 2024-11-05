import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import LoginProvider from './login-provider'
import { getWsHttpSplitLink } from '../utils'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: getWsHttpSplitLink()
})

export default function RootProviders ({children}) {
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        {children}
      </LoginProvider>
    </ApolloProvider>
  )
}