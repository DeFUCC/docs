window.addEventListener('DOMContentLoaded', () => {

    let toggles = document.getElementsByClassName('list-toggle')

    for (let toggle of toggles) {
      let type = toggle.getAttribute('data-type')
      let list = document.getElementById(type+'-list')
      toggle.onclick = () => {
        toggle.classList.toggle('active')
        list.classList.toggle('open')
      }
    }

})
