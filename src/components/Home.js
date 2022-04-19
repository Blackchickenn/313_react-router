import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
      <>
        <div>Home Webpage</div>
        <button onClick={() => navigate('order')}>Submit Order</button>
      </>
  )
}
