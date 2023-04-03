import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import blogimg from '../../assets/About.webp'
import BlogCard from '../../components/Blog/BlogCard'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
import { getAllBlogs } from '../../redux/actions/blog_actions'
import { BlogBody } from './blog.styles'

export default function Blog() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])

  return (
    <>
      <Portada img={blogimg} titulo="Blog" />
      <BlogBody>
        {posts.map((post, i) => (
          <BlogCard
            key={post._id}
            image={post.image}
            title={post.title}
            status={post.status}
            date={post.createdAt}
          />
        ))}
      </BlogBody>
      <Footer />
    </>
  )
}