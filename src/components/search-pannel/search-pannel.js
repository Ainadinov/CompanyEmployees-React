import './search-pannel.css'

const SearchPanel = ({search, searchEmpl}) => {
    return (
        <input type="text"
                value={search} 
                onChange={searchEmpl}
                className="search__input"
                placeholder="Найти сотрудника"/>
    )
}


export default SearchPanel