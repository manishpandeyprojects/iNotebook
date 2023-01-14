import React from 'react'

export default function Alert(props) {
    return (
        <div style={{"position": "relative"}}>
            <div className="position-absolute w-100 alert alert-primary d-flex justify-content-between" role="alert">
                {props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
