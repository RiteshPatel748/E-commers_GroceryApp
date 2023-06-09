import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CastProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderProduct {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly orderID: string;
  readonly product?: Product | null;
  readonly order?: Order | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductProductId?: string | null;
  readonly orderProductOrderId?: string | null;
  constructor(init: ModelInit<OrderProduct, OrderProductMetaData>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

export declare class Product {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly quantity?: string[] | null;
  readonly price: number;
  readonly options?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class CastProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly product?: Product | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly castProductProductId?: string | null;
  constructor(init: ModelInit<CastProduct, CastProductMetaData>);
  static copyOf(source: CastProduct, mutator: (draft: MutableModel<CastProduct, CastProductMetaData>) => MutableModel<CastProduct, CastProductMetaData> | void): CastProduct;
}