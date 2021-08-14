let title = document.getElementById('title')
let desc = document.getElementById('description')
let addBtn = document.getElementById('addTask')
let taskList = document.getElementById('taskList')

addBtn.addEventListener('click', function (e) {
  e.preventDefault()

  let taskTitle = title.value
  let taskDesc = desc.value

  if (
    taskTitle != '' &&
    taskTitle != null &&
    taskDesc != '' &&
    taskDesc != null
  ) {
    let div = document.createElement('div')
    div.className = 'col-md-3'

    let card = `
        <div class="card shadow text-center">
          <div class="card-body">
            <h3>${taskTitle}</h3>
            <p>${taskDesc}</p>
          </div> 
          <div class="card-footer">         
            <button type="button" class="btn btn-primary btn-sm" id="deleteTask">
              <i class="fas fa-trash"></i>
            </button>
            <button type="button" class="btn btn-info btn-sm" id="editTask">
              <i class="fas fa-edit"></i>
            </button>
          </div>
        </div>
      `
    div.innerHTML = card
    taskList.appendChild(div)
    title.value = ''
    desc.value = ''
    setAlert('alert alert-success', 'Task added successfully!')
  } else {
    setAlert('alert alert-primary', 'Task title or description not provided!')
  }
})

function setAlert(classNames, message) {
  let alertDiv = document.createElement('div')
  alertDiv.className = classNames
  alertDiv.textContent = message
  document.getElementById('alertList').append(alertDiv)
  setTimeout(() => {
    let alerts = document.querySelectorAll('.alert')
    alerts.forEach((alert) => {
      alert.remove()
    })
  }, 5000)
}

document.addEventListener('click', function (e) {
  e.preventDefault()
  if (
    e.target.id === 'deleteTask' ||
    e.target.parentElement.id === 'deleteTask'
  ) {
    if (e.target.parentElement.id === 'deleteTask') {
      let task =
        e.target.parentElement.parentElement.parentElement.parentElement
      task.remove()
    } else {
      let task = e.target.parentElement.parentElement.parentElement
      task.remove()
    }
  }
})
