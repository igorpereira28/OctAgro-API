import React from "react"

// importando os componentes
import { SidebarAnalista } from "../../../components/sidebar/SidebarAnalista/SidebarAnalista"
import { TabelaMercadorias } from "../../../components/Tables/TabelaMercadorias/TabelaMercadorias"
import { HeaderAnalista } from "../../../components/header/HeaderAnalista/HeaderAnalista"

// importando o CSS do module.css
import styles from "./MercadoriaAnalista.module.css"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

export const MercadoriaAnalista = () => {
  return (
    <PedidosProvider>
      <div className={styles.main}>
        <SidebarAnalista />

        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderAnalista arrow="True" link="/analista/home" />
          </div>

          <div className={styles.content}>
            <TabelaMercadorias />
          </div>
        </div>
      </div>
    </PedidosProvider>
  )
}
