import React from 'react'

import FiltersCategory from './filter-category/FiltersCateogry'
import CardList from './card-list/CardList'
const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory/>
        <CardList/>
      </div>
    </div>
  )
}

export default HomePage