import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function Sales() {
    return (
        <Fragment>
            <Navbar name="Sara" phone="06363828282" />
            <main>
                Sales Page
            </main>

            <Footer />
        </Fragment>
    )
}

export default Sales