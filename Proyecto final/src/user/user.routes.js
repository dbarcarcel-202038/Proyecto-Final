import express from 'express'
import {
    validateJwt,
    isAdmin
} from '../middlewares/validate-jwt.js'

import {
    register,
    login,
    deleteUser,
    getAllUsers,
    update
} from './user.controller.js'

const api = express.Router()

//rutas publicas
api.post('/register', register)
api.post('/login', login)

//Rutas privadas
api.get('/test', [validateJwt, isAdmin])
api.put('/update/:id', [validateJwt])
api.delete('/deleteUser/:id', deleteUser)
api.get('/getAllUsers', getAllUsers)
export default api