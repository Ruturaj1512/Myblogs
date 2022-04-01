import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Header from '../component/Header';
import MyBlogs from '../component/Myblogs';
import { getblogs } from '../services/blogs.service';

const HomePage = (props) => {

  //     // load tasks by calling the get api
  //   const loadTasks = async (status, func) => {
  //     const result = await getblogs(status)
  //     if (result) {
  //       func(result)
  //     }
  //   }
  const [MyBlogsData, setMyBlogsData] = useState([]);
  const navigate = useNavigate()

  const demo = [
    {
      titel: 'Myblog 1',
      discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta at veritatis, harum velit facilis ullam, reprehenderit enim sed laborum in ea similique nostrum sit ab. Quo nulla perferendis voluptatem temporibus.',
      time: '27 feb 2022',
    },
    {
      titel: 'Myblog 2',
      discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta at veritatis, harum velit facilis ullam, reprehenderit enim sed laborum in ea similique nostrum sit ab. Quo nulla perferendis voluptatem temporibus.',
      time: '10 feb 2022',
    },
    {
      titel: 'Myblog 3',
      discription: 'lkshadllddajdhjdhsjhdfkjshdfkjshfkjhsdjfhsjdhfsjdhfkjsdhfjkshdfkjshdkfjhsdjfhjskdhfkjsdhfkjsdhfkjsfhjsdkfhskjdhfjsdkhfsjdfhsjkdhfsdj',
      time: '10 feb 2022',
    }
  ];
  useEffect(() => {
    //call data
    setData()

  }, [])
  const setData = async () => {
    setMyBlogsData(demo)
  }

  return (
    <div>

      <Header />

      <div className='alignCenter'>
        <div className='row' style={{ maxWidth: '100%', wordBreak: 'break-word' }}>
          {(MyBlogsData || []).map((blog, index) => {
            return (<MyBlogs blog={blog} />)
          })}
        </div>
      </div>


    </div>
  )
}

export default HomePage