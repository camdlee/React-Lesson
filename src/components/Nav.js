import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthState from './AuthState'
import { AppContext } from '../context/AppConext'

export default function Nav() {
    const{favChamp} = useContext(AppContext)


    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Thieves-React
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pokemon">
                        Pokemon
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/feed">
                        Feed
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/test">
                        Functional Component
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/champion">
                        Champion Builder
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/signup">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="/signin">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <AuthState/>
                </li>
            </ul>
            </div>
            <div>
                {favChamp ?
                <p>My Favority Champ is {favChamp}</p> :
                <></>
                }
            </div>
        </nav>
    </div>
    )
  }
