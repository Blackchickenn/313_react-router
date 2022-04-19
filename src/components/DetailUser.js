import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailUser() {
    const params = useParams()
    const userID = params.userID

  return (
    <div>Details about the User {userID}</div>
  )
}
