import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div>Welcome to Home Page button
       <Link to='/login'>  Login</Link></div>
  )
}