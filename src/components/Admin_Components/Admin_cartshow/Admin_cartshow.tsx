import styles from "./ordershow.module.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto"

type typeprops={
    chartData:any
}
const Admin_cartshow = ({chartData}:typeprops) => {
  return (
    <Line data={chartData}/>
  )
}

export default Admin_cartshow;