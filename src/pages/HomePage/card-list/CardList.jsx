import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import styles from './CardList.module.scss';
import { fetchProducts } from '../../../store/products/products.slice'
import CardItem from './card-item/CardItem'
import { categoriesSlice } from './../../../store/categories/categories.slice';
import CardSkeleton from '../card-skeleton/CardSkeleton'
const CardList = () => {

    const dispatch = useAppDispatch()
    const {products, isLoading} = useAppSelector(state => state.productsSlice)
    const category = useAppSelector(state => state.categoriesSlice)
    console.log("products : ", products)
    

    useEffect(()=>{
        dispatch(fetchProducts(category?.toLowerCase()))
    }, [category])
    if(isLoading) return <CardSkeleton/>

  return (
    <ul className={styles.card_list}>
      {products.map(product=><CardItem key={product.id} item={product}/>)}
    </ul>
  )
}

export default CardList