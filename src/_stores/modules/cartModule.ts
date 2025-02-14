import type { ICartItem, IProduct } from '@/types/Product'
import { defineStore } from 'pinia'
import { useToastStore } from './toastModule'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as ICartItem[],
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    addItemToCart(product: IProduct) {
      const toastStore = useToastStore()
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
        toastStore.addToast(
          'Success!',
          'The product has been added. Continue shopping or proceed to checkout!',
          'success',
        )
      }
    },
    decrementCartItem(productId: number) {
      const existingItem = this.items.find((item) => item.id === productId)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          this.removeCartItem(productId)
        }
      }
    },
    removeCartItem(productId: number) {
      const toastStore = useToastStore()
      this.items = this.items.filter((item) => item.id !== productId)
      toastStore.addToast('Item Removed!', 'The product has been removed from your cart.', 'info')
    },
  },
  persist: true,
})
