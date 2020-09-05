import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Signup } from './views/Signup'
import { Contact } from './views/Contact'

export const Routes = () => {
    return (
        <> {/* fragment */ }
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/contact" component={Contact} />  
        </>
    )
}
