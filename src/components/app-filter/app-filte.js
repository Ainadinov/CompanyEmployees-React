import './app-filter.css'

const AppFilter = (props) =>{
    return(
        <div className='btn__gpoup'>
            <button type='button' className='btn btn__light btn__outline-ligth'>Все сотрудники</button>
            <button type='button' className='btn btn__light btn__outline-ligth'>На повышение</button>
            <button type='button' className='btn btn__light btn__outline-ligth'>З/П больше 1000$</button>
        </div>
    )
}

export default AppFilter