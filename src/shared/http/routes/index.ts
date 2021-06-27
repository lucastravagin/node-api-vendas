import { Router } from 'express'
import productsRouter from '@modules/products/routes/products.routes'
import usersRouter from '@modules/users/routes/users.routes'

const routes = Router()

routes.use('/v1/products', productsRouter)
routes.use('/v1/users', usersRouter)

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' })
})

export default routes
