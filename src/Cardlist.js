import React from 'react'
import Cards from './components/Cards'

const Cardlist = ({robots}) => {
    return (
        <div>
        {
            robots.map((user, i) => {
                return( 
                <Cards 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
                )
            })
        }
      </div>
    )
}

export default Cardlist