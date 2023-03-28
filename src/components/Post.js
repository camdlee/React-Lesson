import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <a className="card text-decoration-none text-dark" style={{width:"25rem"}} href="{{url_for('posts.view_single_post', post_id=post.id)}}">
            <img className="card-img-top" src={this.props.post.img_url} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{this.props.post.title}</h5>
                <p className="card-text">{this.props.post.id}</p>
                <small>{this.props.post.author}</small>
            </div>
        </a>
      </div>
    )
  }
}
