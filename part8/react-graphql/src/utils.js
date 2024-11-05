import {  createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

export const STORAGE_KEY = 'token'

export const getWsHttpSplitLink = () => {
  const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/',
  }))
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(STORAGE_KEY)
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })
  
  const httpLink = createHttpLink({ uri: 'http://localhost:4000' })
  
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  )

  return splitLink
}