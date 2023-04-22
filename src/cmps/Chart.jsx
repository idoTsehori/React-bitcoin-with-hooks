import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export function Chart({ data, color }) {
  if (!data) return <div>Loading...</div>
  return (
    <Sparklines data={data.map((data) => data.y)}>
      <SparklinesLine color={color} />
    </Sparklines>
  )
}
