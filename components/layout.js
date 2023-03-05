import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            Navbar
            <main className='container mx-auto flex-1'>{children}</main>
            Footer
        </div>
    )
}

export default Layout