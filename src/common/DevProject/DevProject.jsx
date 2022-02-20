import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import classes from "./DevProject.module.css";
import { useInView } from "react-intersection-observer";

const DevProject = ({ props, ind }) => {
  const { para_content, heading, img_address } = props;
  let RsquareVariants = {
    visible: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      x: "33%",
      opacity: 0,
      scale: 0,
    },
  };
  let LsquareVariants = {
    visible: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      x: "-33%",
      opacity: 0,
      scale: 0,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className={classes.project_layer}>
      <div className={classes.heading}>
        <h1>{heading}</h1>
      </div>
      <div className={classes.left_col}>
        <div className={classes.text_content}>
          <p>{para_content}</p>
        </div>
      </div>
      <div className={classes.right_col}>
        <div className={`${classes.img_cover} square`}>
          <AnimatePresence>
            <motion.img
              src={img_address}
              className={`${classes.image} square`}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={ind % 2 === 0 ? LsquareVariants : RsquareVariants}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DevProject;
