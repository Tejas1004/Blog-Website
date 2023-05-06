import React from 'react';
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  const posts=[
    {
      id: 1,
      title: 'Among Us',
      desc: "A phrase is a group of words that works together in a sentence but does not contain a subject or a verb. Often phrases are used for descriptions of people, things, or events. Examples Filled with joy, the girl jumped up and down",
      img:"https://m.media-amazon.com/images/I/71S0Xzbg0XL._SX425_.jpg",
      
  },
  {
      id: 2,
      title: 'GTA V',
      desc: "A phrase is a group of words that works together in a sentence but does not contain a subject or a verb. Often phrases are used for descriptions of people, things, or events. Examples Filled with joy, the girl jumped up and down",
      img:"https://m.media-amazon.com/images/I/81kAitW5qAL._SX569_.jpg",
      
  },
  {
      id: 3,
      title: 'Call Of Duty',
      desc: "A phrase is a group of words that works together in a sentence but does not contain a subject or a verb. Often phrases are used for descriptions of people, things, or events. Examples Filled with joy, the girl jumped up and down",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGAKDZAlbzrwevw_NX8jbEPIrR-Fuw2S6yN--7TgFhKVfHklHrwQZFGVDX_soz6Tcvd5FNp4GT58XE3XlU_6I5gZcOPvhoG0plafxVW59_aBB0NtHBBh7c&usqp=CAE",
      
  },
  {
      id: 4,
      title: 'MineCraft',
      desc: "A phrase is a group of words that works together in a sentence but does not contain a subject or a verb. Often phrases are used for descriptions of people, things, or events. Examples Filled with joy, the girl jumped up and down",
      img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_5dx45gnfVAV3vDFxyTT_wXzSxeLnmE8V1BhHUuFfo-uNk6Ycv186Kg4_sEV2r2Ag93gwlSZmALXD0_OHCFQSFPiwuCOhpg&usqp=CAE",
  }
  ];


  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) =>(
          <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                  <p>{post.desc}</p>
                  <button>Read More</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home