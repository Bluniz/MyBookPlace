import React from 'react'
import notFoundIcon from '../../assets/404.svg'
import { Text } from '../../components/Text/index.jsx'
import './style.css'

const NotFound = () => (
    <div className="container">
        <img src={notFoundIcon} alt="gif" className="img" />
        <Text variant="h4">Página não encontrada</Text>
    </div>
)

export default NotFound
