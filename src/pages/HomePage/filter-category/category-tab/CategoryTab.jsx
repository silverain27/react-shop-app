import React from 'react'
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import styles from './CategoryTab.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';


const CategoryTab = ({text, categoryName}) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state)=> state.categoriesSlice); //store에 등록한 내용들이다. 
    console.log(category)

    const getActiveCategory= () =>{
        dispatch(setActiveCategory(categoryName))
    }

  return (
    <button
        className = {
            categoryName === category
                ? styles.active_category
                : styles.category_button
        }
        onClick={getActiveCategory}> 
        {text}
        
    </button>
  )
}

export default CategoryTab