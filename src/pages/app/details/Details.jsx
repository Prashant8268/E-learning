import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { useParams ,Link} from "react-router-dom";
//Third task: import useParams hook

function Details() {
 

  const {id} = useParams();
  const item = coursesData.find((index)=>id===index.id);
 

  return (
    //Third Task: get course id and match it with the data
    
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={`${item.img}`} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}>{item.title}</h1>
          <p className={style.card_description}>{item.description}</p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
     <Link to={`/e-learning/learn/${item.id}`} > <button className={style.button}>Start Learning</button> </Link>
     </div>
  );
}

export default Details;
