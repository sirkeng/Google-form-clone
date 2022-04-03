import { useState, useRef, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { catsRequestAction } from '../../actions'

const useLoadCats = (datas) => {
    // console.log('useLoadCats', datas)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [catsData, setCatsData] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const openPageFirstTime = useRef(true)

    // Scroll Bar when come last element will get more data!
    const observer = useRef()
    const lastElementRef = useCallback(node => {
        // console.log('useCallback:loading', loading, node)
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                // if(catsData.length===datas.length) return
                console.log('Visible', pageNumber)
                setHasMore(true)
                setLoading(true)
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                dispatch(catsRequestAction(20, pageNumber))
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, dispatch, pageNumber])

     // Request data from API when first open this page!
    // useRef do not re-render
    useEffect(() => {
        if (openPageFirstTime.current) {
        // console.log('call API--->', pageNumber)
        dispatch(catsRequestAction(20, pageNumber))
        // setHasMore(true)
        // setLoading(false)
        openPageFirstTime.current = false
        return
        }
    }, [dispatch, pageNumber])

    // First time when get new data will set fresh new data for display
    useEffect(() => {
        if(datas.length===20 && catsData.length === 0 && loading) {
            console.log('useEffect:loading--->', loading, datas.length)
            setCatsData(datas)
            setLoading(false)
        }
    }, [datas, loading, catsData])



    // Change data for display
    useEffect(() => {
        if(hasMore) {
            console.log('useEffect:hasMore')
            setCatsData(prevCats => {
                return [...new Set([...prevCats, ...datas])]
            })
            setHasMore(false)
            setLoading(false)
        }
    }, [hasMore, datas])

    return {
        catsData,
        lastElementRef,
        loading
    }
}

export default useLoadCats