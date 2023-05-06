import React from 'react';
import "./Single.scss";
import  Edit  from "../../img/pencil.png";
import  Delete  from "../../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://resize.indiatvnews.com/resize/vod/300_-/2021/09/0_e5jax3kv.jpg" alt="" />
        <div className="user">
          <img src="https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg" alt="" />
        <div className="info">
          <span>SAFAR</span>
          <p>Posted 2 days ago</p>  
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={ Edit } alt="" />
          </Link>
          <img src={ Delete } alt="" />  
        </div>  
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum incidunt aliquid?  incidunt,  ducimus eaque!</h1>
      <p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, libero non blanditiis a ad minus similique asperiores veritatis recusandae ipsum. Perspiciatis minus ut consectetur quia fugiat quas maxime aliquam soluta?
        Corporis, commodi atque. Impedit labore deserunt, distinctio ea itaque laudantium voluptatibus nostrum. Voluptatem voluptatibus commodi totam neque vero ipsum dolores ipsa eos odit debitis, cupiditate itaque maiores voluptates beatae quia.
        Sapiente laborum praesentium explicabo numquam debitis obcaecati dolor quidem totam adipisci dolorum commodi nulla beatae, ullam exercitationem corrupti perferendis ab quasi nemo eligendi sit nisi vel aliquid ratione? At, itaque. 
        </p> <br />
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem adipisci rerum doloribus neque beatae, voluptates, sint distinctio voluptatum quos eveniet officiis ex. Optio nesciunt, quod tenetur eligendi at quisquam.
        Neque eligendi vitae labore incidunt nulla nisi ea obcaecati commodi blanditiis at vero voluptate inventore iste officia, quas quo, molestiae explicabo! In aut temporibus aliquam, modi similique veniam ab quasi. </p> <br />
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit mollitia itaque illo nulla! Magnam dignissimos ullam quod vel, quaerat unde asperiores quidem molestias. Quibusdam natus magni exercitationem corrupti labore. </p> <br />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt, ut commodi aliquam ipsam culpa distinctio itaque officia non mollitia assumenda facere quia veniam, eius asperiores libero voluptatum totam rem!
        Quos ipsa suscipit expedita quibusdam mollitia quae ut culpa quas officiis necessitatibus animi ullam, illum reprehenderit! Soluta nulla beatae delectus dolorem natus pariatur perspiciatis obcaecati itaque rerum. Asperiores, nemo magni. </p>  
      </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single