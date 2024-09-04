import React from "react";
import styles from "./inscricao.module.css";

export default function Inscricao() {
  return (
    <main className={styles.main}>
      <div className={styles.formulario}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIypsBvjoDCt_vFx6ZRAbTpdg_fGeHUEnbrZ600OuL40UK-A/viewform?embedded=true">
          Carregando…
        </iframe>
      </div>
    </main>
  );
}
