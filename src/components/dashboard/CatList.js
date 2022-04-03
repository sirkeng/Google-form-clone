import React from "react"
import { useSelector } from 'react-redux'
import { Image, Alert } from 'antd'

import { useDocumentTitle } from '../../utils'
// import { catsRequestAction } from '../../actions'
import useLoadCats from './useLoadCats'


const CatList = ({ title }) => {
    useDocumentTitle(title)
    // const dispatch = useDispatch()
    // const openPageFirstTime = useRef(true)
    
    const { datas } = useSelector((state) => state.cats)

    const { catsData, loading, lastElementRef } = useLoadCats(datas)


    return (
        <>
            {catsData.map((value, index) => {
                if(catsData.length === index + 1) {
                    return <div ref={lastElementRef} key={index}><Image
                        alt={value.id}
                        width={200}
                        src={value.url}
                    /></div>
                } else {
                    return <div key={index}><Image
                        alt={value.id}
                        width={200}
                        src={value.url}
                    /></div>
                }
            })}
            { loading && <Alert message={'Loading...'} type="info" />}
        </>
    )
}

export default CatList