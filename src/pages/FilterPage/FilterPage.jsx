import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CardSelecter from '../../components/CardSelecter/CardSelecter'
import { Pagination, Box } from '@mui/material'

const FilterPage = () => {
  const { filterType, filterValue } = useParams()
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1) // Estado para la página actual
  const itemsPerPage = 10 // Número de personajes por página
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

  // Ajustar los personajes para que la última página desaparezca
  const adjustedCharacters = [...characters]
  if (characters.length % itemsPerPage !== 0) {
    const extraCharacters = adjustedCharacters.splice(-(characters.length % itemsPerPage))
    adjustedCharacters.splice(adjustedCharacters.length - itemsPerPage, 0, ...extraCharacters)
  }

  // Calcular los personajes que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCharacters = adjustedCharacters.slice(indexOfFirstItem, indexOfLastItem)

  // Calcular el número total de páginas
  const totalPages = Math.ceil(adjustedCharacters.length / itemsPerPage)

  // Cambiar de página
  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <div className="card-container" style={{ paddingTop: '50px' }}>
      {currentCharacters.map((character) => (
        <CardSelecter
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          onClick={handleCardClick}
          race={character.race}
        />
      ))}

      {/* Barra de paginación estilizada */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <Pagination
    count={totalPages} // Número total de páginas
    page={currentPage} // Página actual
    onChange={handlePageChange} // Manejar el cambio de página
    color="primary" // Color del componente
    shape="rounded" // Bordes redondeados
    siblingCount={1} // Número de páginas visibles a los lados
    boundaryCount={2} // Número de páginas visibles al inicio y al final
    sx={{
      '& .MuiPaginationItem-root': {
        backgroundColor: 'purple', // Fondo morado para todos los botones
        color: 'white', // Texto blanco para todos los botones
        borderRadius: '8px', // Bordes redondeados
        '&:hover': {
          backgroundColor: '#6a0dad', // Fondo más oscuro al pasar el mouse
        },
      },
      '& .Mui-selected': {
        backgroundColor: '#4b0082', // Fondo morado oscuro para el botón seleccionado
        color: 'white', // Texto blanco para el botón seleccionado
        fontWeight: 'bold', // Texto en negrita para el botón seleccionado
      },
    }}
  />
</Box>
    </div>
  )
}

export default FilterPage