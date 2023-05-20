/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      image
      images
      quantity
      price
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        images
        quantity
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCastProduct = /* GraphQL */ `
  query GetCastProduct($id: ID!) {
    getCastProduct(id: $id) {
      id
      userSub
      quantity
      productID
      product {
        id
        title
        description
        image
        images
        quantity
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      castProductProductId
    }
  }
`;
export const listCastProducts = /* GraphQL */ `
  query ListCastProducts(
    $filter: ModelCastProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCastProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        quantity
        productID
        product {
          id
          title
          description
          image
          images
          quantity
          price
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        castProductProductId
      }
      nextToken
    }
  }
`;
