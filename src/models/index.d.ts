import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

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

type EagerOrder = {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly pincode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly pincode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order, OrderMetaData>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

type EagerOrderProduct = {
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
}

type LazyOrderProduct = {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly orderID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly order: AsyncItem<Order | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductProductId?: string | null;
  readonly orderProductOrderId?: string | null;
}

export declare type OrderProduct = LazyLoading extends LazyLoadingDisabled ? EagerOrderProduct : LazyOrderProduct

export declare const OrderProduct: (new (init: ModelInit<OrderProduct, OrderProductMetaData>) => OrderProduct) & {
  copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

type EagerProduct = {
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
}

type LazyProduct = {
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
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerCastProduct = {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly product?: Product | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly castProductProductId?: string | null;
}

type LazyCastProduct = {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly castProductProductId?: string | null;
}

export declare type CastProduct = LazyLoading extends LazyLoadingDisabled ? EagerCastProduct : LazyCastProduct

export declare const CastProduct: (new (init: ModelInit<CastProduct, CastProductMetaData>) => CastProduct) & {
  copyOf(source: CastProduct, mutator: (draft: MutableModel<CastProduct, CastProductMetaData>) => MutableModel<CastProduct, CastProductMetaData> | void): CastProduct;
}