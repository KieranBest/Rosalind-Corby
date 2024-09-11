import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

import styles from './Intro.module.css';

export const Intro = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(
            FOG({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                highlightColor: 0xb9e4ff,
                midtoneColor: 0xa3c4ff,
                lowlightColor: 0x9eabff,
                baseColor: 0xffffff,
                zoom: 0.70
            })
          );
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy();
        };
      }, [vantaEffect]);
    return (
        <section ref={vantaRef} id="home" className={`${styles.full}`}>
            <div className={`${styles.title}`}>
                <h1>Help is just a phone call away.</h1>
            </div>
        </section>
    )
}