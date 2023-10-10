import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const Child1 = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div>Child Component 1</div>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}