import { Outlet, useSearchParams } from 'react-router-dom'
import React from 'react'

export default function Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get( 'filter') === 'active'
  return (
    <div>
        <p>User1</p>
        <p>User2</p>
        <p>User3</p>
        <Outlet/>
        <div>
            <button onClick={() => setSearchParams({filter : 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {showActiveUsers ? (<h2>Show Active Users</h2>) : (<h2>Show All Users</h2>)}
    </div>
  )
}
