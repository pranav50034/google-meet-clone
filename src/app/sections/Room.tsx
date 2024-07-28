'use client'

import { initializePeer } from '@/redux/modules/peer'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Room = () => {
    const dispatch = useDispatch()
    const {peer} = useSelector((state: any) => state.peer)
    
    useEffect(() => {
      dispatch(initializePeer())
        
    }, [dispatch])
  return (
    <div>Room</div>
  )
}

export default Room