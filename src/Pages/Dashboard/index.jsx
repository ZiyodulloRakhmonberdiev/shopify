import React from 'react'
import ProductSalesChart from '../../Components/ProductSalesChart'
import SalesView from '../../Components/SalesViewChart'
import { DashboarWrapper } from './styles'

const Dashboard = () => {
  return (
    <DashboarWrapper>
      <SalesView/>
      <ProductSalesChart/>
    </DashboarWrapper>
  )
}

export default Dashboard