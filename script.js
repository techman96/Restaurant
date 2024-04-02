let videos = document.querySelectorAll('video')
let video = document.getElementById('video')
let playBtn = document.getElementById('video-button')

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.play()
    } else{
      entry.target.pause()
    }
  })
})
videos.forEach(el => {
  observer.observe(el)
})