window.addEventListener('DOMContentLoaded', () => {

    let toggles = document.getElementsByClassName('toggle')
    let content = document.getElementById('content')
    for (let toggle of toggles) {
        let type = toggle.getAttribute('data-type')

        toggle.onclick = () => {
            toggle.classList.toggle('off')
            content.classList.toggle('no-' + type)
        }
    }

})
