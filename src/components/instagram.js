import React, {Component} from 'react'
import superagent from 'superagent'
import Istyle from '../../styles/components/instagram.scss'
import insta from '../assets/images/instagram.png'

class Feed extends Component {
  constructor() {
    super()
    this.state = {
      username: 'garamfood',
      feed: []
    }
  }
  componentWillMount() {
    this.fetchPhotos()
  }
  fetchPhotos() {
    superagent
    .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=4023075218.9093941.d308d5ea3ffc489bbe5e0aa7e16af432&count=15')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if(err) {
        console.log('Error: ' + err)
        return
      }
      //console.log('response: ' + JSON.stringify(response.body.data))
      this.setState({
        feed: response.body.data
      })
    })
  }

  render() {
    return (
      <div className={Istyle.instaWrap}>
        <h3><img src={insta} /></h3>
        <h4><a href="https://www.instagram.com/garamfood/" target="_blank">@garamfood</a></h4>
        <div className={Istyle.leftBox}>
          { this.state.feed.map((post, i) => {
              const imageUrl = post.images.low_resolution.url
              const likes = post.likes.count
              const caption = post.caption !== null ? post.caption.text : ''
              const link = post.link
              return (
                <div key={post.id}>
                  <a href={post.link} target="_blank"><img src={imageUrl} alt="인스타 이미지"/></a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Feed
