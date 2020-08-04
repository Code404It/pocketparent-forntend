import React from 'react'

const ThisKid = kid => {
    return(
       <div>
           <p>name: {kid.kid.name}</p>
           <p>date: {kid.kid.date}</p>
           <p>title: {kid.kid.title}</p>
           <p>description: {kid.kid.description}</p>
           <p>rating: {kid.kid.rating} </p>
           <p>discipline_score: {kid.kid.discipline_score}</p>
       </div>
    )
}

export default ThisKid