import styles from "./ordershow.module.css";
import {Doughnut} from "react-chartjs-2";
import "chart.js/auto"

type typeprops={
    chartData:any
}
const Admin_apishow = ({chartData}:typeprops) => {
  return (
    <Doughnut data={chartData}/>
  )
}

export default Admin_apishow;