import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NamePage() {

    const location = useLocation()
    const currentComponent = location.pathname.replace('/', '')

    return (
        <div className='sar'>
            <div className="sar-blok">
                <p className='sar-parent'><Link to='/'>Home</Link></p>
                <div className='sar-drop'>/</div>
                <p className='sar-child'>{currentComponent}</p>
            </div>
        </div>
    )
}
