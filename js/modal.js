const myModal = document.getElementById('modal1')
const myInput = document.getElementById('enviar')

myInput.addEventListener('click', () => {
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })
})