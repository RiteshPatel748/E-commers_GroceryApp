/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCastProduct = /* GraphQL */ `
  mutation CreateCastProduct(
    $input: CreateCastProductInput!
    $condition: ModelCastProductConditionInput
  ) {
    createCastProduct(input: $input, condition: $condition) {
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
export const updateCastProduct = /* GraphQL */ `
  mutation UpdateCastProduct(
    $input: UpdateCastProductInput!
    $condition: ModelCastProductConditionInput
  ) {
    updateCastProduct(input: $input, condition: $condition) {
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
export const deleteCastProduct = /* GraphQL */ `
  mutation DeleteCastProduct(
    $input: DeleteCastProductInput!
    $condition: ModelCastProductConditionInput
  ) {
    deleteCastProduct(input: $input, condition: $condition) {
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
