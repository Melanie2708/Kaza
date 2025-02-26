import styles from "./Slideshow.module.scss";
import {useState} from "react";

function Slideshow({imageList}) {
    const [imageIndex, setImageIndex] = useState(0);

    const changeIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = imageList.length -1;
        } else if (newIndex > imageList.length - 1){
            newIndex = 0;
        }

        setImageIndex(newIndex);
    };

    return (
        <div className={styles.main} style={{ backgroundImage: `url(${imageList[imageIndex]})` }}>
          <div className={styles.arrows}>
            <i className={styles.iconeLeft} onClick={() => changeIndex(imageIndex - 1)}></i>
            <i className={styles.iconeRight} onClick={() => changeIndex(imageIndex + 1)}></i>
          </div>
          <div className={styles.currentIndex}>
            {imageIndex + 1} / {imageList.length}
          </div>
        </div>
      );
    }
 
export default Slideshow;