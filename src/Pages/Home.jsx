import React from "react";

import { Intro } from "../Components/Home/Intro";

import styles from '../Components/Home/Intro.module.css';

export const Home = () => {
    return (
        <section className={styles.overflow}>
            < Intro />
        </section>
    )
};