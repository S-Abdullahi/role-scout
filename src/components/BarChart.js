import React from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveContainer, BarChart, XAxis , YAxis,Bar, Tooltip} from 'recharts'


const BarChartDisplay = ({data}) => {
    const {monthlyApplications} = useSelector((store)=>store.allJobs)
    console.log(monthlyApplications)
  return (
    <ResponsiveContainer>
        <BarChart data={data} width={730} height={250} >
            <XAxis dataKey='date'/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey='count' fill='#ffe992'/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartDisplay