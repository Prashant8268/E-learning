import React from "react";
import styles from "./Chapter.module.css";
import { useParams,useOutletContext } from "react-router-dom";
import coursesData from "../../../data/courses.json";

function Chapter() {



  const {chapterId} = useParams();
  const course = useOutletContext();
  const chapter = course.chapters.find((index)=>chapterId===String(index.chapter));

  // const course = coursesData.find((index)=>id===index.Chapter);

  // const chapter = course.find((index)=>id===index.id)

 
  return (
    <div>
      <h1>{course.Chapter}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapterId}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
