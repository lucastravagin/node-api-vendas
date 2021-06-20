import productsRouter from '@modules/products/routes/products.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/v1/products', productsRouter)

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' })
})

export default routes
