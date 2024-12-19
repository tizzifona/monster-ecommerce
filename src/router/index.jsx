import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/home/Home'
import MonsterDetail from '../pages/MonsterDetail/MonsterDetail'
import ProductCreatorForm from '../pages/ProductCreatorForm/ProductCreatorForm'
import ProductManager from '../pages/ProductManager/ProductManager'
import MonsterNotFound from '../pages/MonsterNotFound/MonsterNotFound'
import ProductShop from '../pages/shop/ProductShop'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/shop",
                element: <ProductShop/>
            },
            {
                path:"/shop/monsters/:monsterId",
                element: <MonsterDetail/>
            },
            {
                path:"/create-monsters",
                element:<ProductCreatorForm/>
            },
            {
                path:"admin/product-manager",
                element:<ProductManager/>
            },
           
        ]
    },
    {
        path:"*",
        element:<MonsterNotFound/>
    }
])