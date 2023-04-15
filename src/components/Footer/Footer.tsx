import styles from "./footer.module.css"

type displaying={
  down:string
}

const Footer = (props:displaying) => {

  //sending footer in the bottom;
  const footer={
    bottom:props.down=="true"?"0":""

  }
  return (
    <div className={styles.footer} style={footer}>
        @HEROVINAY
    </div>
  )
}

export default Footer