import videos from "../../json/yt.json";
import styles from "./Category.module.css";

export const categorias = [
    "CaseMito",
    "GamePlay",
    "Comedia"
  ]
  
export function filterCategory(id) {
    return videos.filter( video => video.category === categorias[id] )
  }

function Category({ category, children}){
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>{children}</div>
        </section>
    );
}

export default Category;