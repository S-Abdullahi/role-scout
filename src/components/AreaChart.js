import React from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveContainer, AreaChart, CartesianGrid,XAxis,YAxis,Tooltip, Area } from 'recharts'

const AreaChartDisplay = ({data}) => {
    const {monthlyApplication} = useSelector((store)=>store.allJobs)
    console.log(data)
  return (
    <ResponsiveContainer>
        <AreaChart data={data} margin={{top: 50}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey={'date'}/>
            <YAxis allowDecimals={false}/>
            <Tooltip/>
            <Area type='monotone' dataKey='count' stroke='#ffe992' fill='#ffe992'/>
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartDisplay