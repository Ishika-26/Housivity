import {configureStore} from "@reduxjs/toolkit"
import slices from "./slices"

const store = configureStore({
    reducer: {
        wishlist: slices,
    }
})

export default store