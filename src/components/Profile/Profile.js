import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {

const params = useParams();

  return (
    <div>
      <h1>Bienvenue "{params.id}" sur votre profil.</h1>
    </div>
  )
}
