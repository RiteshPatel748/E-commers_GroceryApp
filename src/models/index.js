// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OrderProduct, Product, CastProduct } = initSchema(schema);

export {
  Order,
  OrderProduct,
  Product,
  CastProduct
};