import React from 'react'
import { Searchbar } from './Searchbar'
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useState } from "react";
import versionfile from '../version.txt'

export const Navbar = () => {
  const [version, setVersion] = useState('')

  useEffect(() => {
    fetch(versionfile).then((res) => {
      return res.text()
    }).then((data) => {
      console.log(data);
      setVersion(data)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <div className="leftbar1"></div>
        <div className="nav mid1">
          <div className="log">
            <h3 className="white bold">DS<span>@</span>Ease</h3>
          </div>
          <div className="tags display-flex mx-5">
            <a href="/docs" className="white txtdecnone mx-2 smtxt1">Docs</a>
            <a href="/blog" className="white txtdecnone mx-2 smtxt1">Blog</a>
            <a href="/community" className="white txtdecnone mx-2 smtxt1">Community</a>
          </div>
          <div className="search">
            <Searchbar />
          </div>
          <div className="connections display-flex">
            <a target='_blank' href="https://github.com/dsatease/ds-ease-react/releases" className="white txtdecnone mx-2 smtxt" rel="noreferrer">V{version} </a>
            <a target='_blank' href="https://github.com/dsatease" className="white txtdecnone mx-2 smtxt display-flex" rel="noreferrer">GitHub <LaunchIcon style={{ fontSize: '13px', marginLeft: '9px' }} /> </a>
          </div>
          <div className="rightbar1"></div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">

            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  List
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">ArrayList</a></li>
                  <li><a class="dropdown-item" href="/">Single LinkedList</a></li>
                  <li><a class="dropdown-item" href="/">Double LinkedList</a></li>
                  <li><a class="dropdown-item" href="/">Circular LinkedList</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Stack
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Stack</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Queue
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Queue</a></li>
                  <li><a class="dropdown-item" href="/">Deque</a></li>
                  <li><a class="dropdown-item" href="/">Circular Queue</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tree Data Structure
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Map
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Set
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Heap
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Trie
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Graph
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
