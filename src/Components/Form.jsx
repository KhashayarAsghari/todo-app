import React, {Component} from "react";
import styles from "./Form.module.css";

export default function Form() {
    return (
        <div className={styles.frmContainer}>
            <h3 className={styles.frmHeader}>Welcome!</h3>
            <p className={styles.frmDesc}>add your tasks in the box below</p>

            <div className={styles.frmInputContainer}>
                <input type="text" className={styles.frmInput} placeholder="Enter your task"/>
                <button className={styles.frmBtn}>Add</button>
            </div>
        </div>
    )
}