import React from 'react'

export const ProgrammingLanguages = ({icon, language}) => {

    return (
        <>
        <div className="programmingLanguages">
            <i className={`iconProps ${icon}`} ></i>
            <p>{language}</p>
        </div>
        </>
    )
}
