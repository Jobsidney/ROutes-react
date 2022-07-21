import React from 'react'
import {Link,Outlet} from "react-router-dom"
function About() {
  return (
    <div>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque praesentium asperiores aperiam impedit. Fugit excepturi maxime distinctio accusamus vero, labore dolorum modi consequatur obcaecati, iusto assumenda nobis voluptatibus temporibus.</p>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/about/News'>News</Link>
            </li>
            <li>
              <Link to='/about/Blogs'>Blogs</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default About