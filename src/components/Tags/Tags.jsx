import React from 'react'
import '../Tags/Tags.css'

export default function Tags(props) {
  console.log(props)
  return (
    <li className='tag-item'>{props.tags}</li>
  )
}
