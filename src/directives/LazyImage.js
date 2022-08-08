export default {
  inserted (el, { value: imageName }) {
    el.src = ''

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const images = require.context('@/assets/images/', false)
          el.src = images(`./${imageName}`)
          observer.disconnect()
        }
      })
    })

    imageObserver.observe(el)
  }
}
