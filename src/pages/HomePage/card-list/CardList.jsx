import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import styles from './CardList.module.scss'
const CardList = () => {

    const dispatch = useAppDispatch
    useEffect(()=>{
        dispatch()
    }, [])
  return (
    <div>CardList</div>
  )
}

export default CardList