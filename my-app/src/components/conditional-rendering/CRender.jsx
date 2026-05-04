import React, { useState } from 'react'

function CRender() {
    const [name, setName] = useState("Ameer Hamza")
    const [isShow, setIsShow] = useState(true)
    // Condition Rendering ( Condition ki base pr kuch Dikhana)

    // if (isShow) {
    //     console.log('Hello I am if')
    //     return (
    //         <>
    //             <h1>If Condition true</h1>
    //         </>
    //     )
    // }


    // Ternary operator:
    // condition ? true : false

    // Logical AND
    // condition && true
    return (

        <div
            style={{ height: "100vh" }} >
                <h1>Conditional Rendering</h1>
          {/* {isShow &&  <h1>Hello my name is:{name}</h1>} */}

          {isShow ? (<div>Is SHow State is True </div>): (<div> Is Show is False </div>)}
        </div>
    )
}

export default CRender