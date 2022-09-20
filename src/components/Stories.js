import React from 'react'
import HorizontalScroll from 'react-horizontal-scrolling'

import '../styles/stories.scss'
import Story from './Story'

const Stories = () => {
  return (
      <div className='stories'>
          <HorizontalScroll className='scroll'>
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
          </HorizontalScroll>
    </div>
  )
}

export default Stories