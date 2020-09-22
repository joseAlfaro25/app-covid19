
import React from "react"

const PrivateRoute = (props) => {
    const { isAuthenticated } = props.path
    if (isAuthenticated) {
        return <Route {...props} /> // haciendo esto se pasa el prop `path`, `auth` y `component`
    }
    return <Redirect to="/login" />
}