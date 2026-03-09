import { configureStore } from '@reduxjs/toolkit'
import productBasicDetailsReducer from './utilities/slice/productBasicDetailsSlice.js'

export default configureStore({
    reducer: {
      productDetails: productBasicDetailsReducer
    },
})
