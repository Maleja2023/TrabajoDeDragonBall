import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CardSelecter from '../../components/CardSelecter/CardSelecter'

const FilterPage = () => {
  const { filterType, filterValue } = useParams()
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Construir la URL con el filtro de género
        const apiUrl = `https://dragonball-api.com/api/characters?gender=${filterValue}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        setCharacters(data)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }
    
    if (filterType === 'gender' && filterValue) {
      fetchCharacters()
    }
  }, [filterType, filterValue])

  const handleCardClick = (id) => {
    navigate(`/personaje/${id}`)
  }

  return (
    <div className="card-container" style={{ paddingTop: '50px' }}>
      {characters.map((character) => (
        <CardSelecter
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          onClick={handleCardClick}
          race={character.race}
        />
      ))}
    </div>
  )
}

export default FilterPage 