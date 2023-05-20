/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCastProduct = /* GraphQL */ `
  subscription OnCreateCastProduct {
    onCreateCastProduct {
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
export const onUpdateCastProduct = /* GraphQL */ `
  subscription OnUpdateCastProduct {
    onUpdateCastProduct {
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
export const onDeleteCastProduct = /* GraphQL */ `
  subscription OnDeleteCastProduct {
    onDeleteCastProduct {
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
