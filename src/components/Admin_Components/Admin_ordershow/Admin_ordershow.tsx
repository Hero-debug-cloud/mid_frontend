import styles from "./ordershow.module.css";
import {Bar} from "react-chartjs-2";
import "chart.js/auto"

type typeprops={
    chartData:any
}
const Admin_ordershow = ({chartData}:typeprops) => {
  return (
    <Bar data={chartData}/>
  )
}

export default Admin_ordershow