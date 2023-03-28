import React, { Component } from 'react'
import Post from '../components/Post'

export default class Feed extends Component {
  constructor(){
    super()
    this.state = {
      posts:[]
    }
  }

  viewPosts = () => {
    return this.state.posts.map((post) =><Post key={post.post_id} post={post}/>)
  }

  getPosts = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/view_posts')
    const data = await response.json()
    console.log(data)
    if(data){
      this.setState({
       posts: data.data 
      })
    }
  }


  componentDidMount = () => {
    this.getPosts()
  }

  render() {
    return (
      <div>
        {this.viewPosts()}
      </div>
    )
  }
}
