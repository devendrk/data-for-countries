import React from 'react'

export default function SearchField({ handleSearchOnchange }) {
    return (
        <div>
            <input placeholder=" search for country" onChange={handleSearchOnchange} type="search" />
        </div>
    )
}
