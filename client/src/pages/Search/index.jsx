import React from 'react'
import SearchForm from '../../components/SearchForm'
import './styles.css'

const Search = () => {
  return (
    <>
    <div className='wrapper'>
        <SearchForm />
      <div className='results'>
        Results of your search will be shown here
      </div>
    </div>
    </>
  )
}

export default Search