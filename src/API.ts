/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  image: string,
  images: Array< string >,
  quantity?: Array< string > | null,
  price: number,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  quantity?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title?: string | null,
  description?: string | null,
  image: string,
  images: Array< string >,
  quantity?: Array< string > | null,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  quantity?: Array< string > | null,
  price?: number | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCastProductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  productID: string,
  castProductProductId: string,
};

export type ModelCastProductConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCastProductConditionInput | null > | null,
  or?: Array< ModelCastProductConditionInput | null > | null,
  not?: ModelCastProductConditionInput | null,
  castProductProductId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CastProduct = {
  __typename: "CastProduct",
  id: string,
  userSub: string,
  quantity: number,
  productID: string,
  product: Product,
  createdAt: string,
  updatedAt: string,
  castProductProductId: string,
};

export type UpdateCastProductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  productID?: string | null,
  castProductProductId?: string | null,
};

export type DeleteCastProductInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  quantity?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelCastProductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCastProductFilterInput | null > | null,
  or?: Array< ModelCastProductFilterInput | null > | null,
  not?: ModelCastProductFilterInput | null,
  castProductProductId?: ModelIDInput | null,
};

export type ModelCastProductConnection = {
  __typename: "ModelCastProductConnection",
  items:  Array<CastProduct | null >,
  nextToken?: string | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCastProductMutationVariables = {
  input: CreateCastProductInput,
  condition?: ModelCastProductConditionInput | null,
};

export type CreateCastProductMutation = {
  createCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type UpdateCastProductMutationVariables = {
  input: UpdateCastProductInput,
  condition?: ModelCastProductConditionInput | null,
};

export type UpdateCastProductMutation = {
  updateCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type DeleteCastProductMutationVariables = {
  input: DeleteCastProductInput,
  condition?: ModelCastProductConditionInput | null,
};

export type DeleteCastProductMutation = {
  deleteCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCastProductQueryVariables = {
  id: string,
};

export type GetCastProductQuery = {
  getCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type ListCastProductsQueryVariables = {
  filter?: ModelCastProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCastProductsQuery = {
  listCastProducts?:  {
    __typename: "ModelCastProductConnection",
    items:  Array< {
      __typename: "CastProduct",
      id: string,
      userSub: string,
      quantity: number,
      productID: string,
      product:  {
        __typename: "Product",
        id: string,
        title?: string | null,
        description?: string | null,
        image: string,
        images: Array< string >,
        quantity?: Array< string > | null,
        price: number,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      castProductProductId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    description?: string | null,
    image: string,
    images: Array< string >,
    quantity?: Array< string > | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCastProductSubscription = {
  onCreateCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type OnUpdateCastProductSubscription = {
  onUpdateCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};

export type OnDeleteCastProductSubscription = {
  onDeleteCastProduct?:  {
    __typename: "CastProduct",
    id: string,
    userSub: string,
    quantity: number,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      title?: string | null,
      description?: string | null,
      image: string,
      images: Array< string >,
      quantity?: Array< string > | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    castProductProductId: string,
  } | null,
};
