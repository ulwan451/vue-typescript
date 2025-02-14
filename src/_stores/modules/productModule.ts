import { defineStore } from 'pinia'
import { productServices } from '@/_services/product.services'
import type { IProduct } from '@/types/Product'

interface IProductState {
  products: IProduct[]
  productDetail: IProduct
  loading: boolean
  error: string | null
}

export const useProductStore = defineStore('product', {
  state: (): IProductState => ({
    products: [],
    productDetail: {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: { rate: 0, count: 0 },
    },
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        this.products = await productServices.getProducts()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch products'
      } finally {
        this.loading = false
      }
    },
    async fetchProductById(id: number): Promise<void> {
      this.loading = true
      this.error = null
      try {
        this.productDetail = await productServices.getProductById(id)
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch product detail'
      } finally {
        this.loading = false
      }
    },
  },
})
