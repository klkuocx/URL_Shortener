// Define elements
const link = document.querySelector('#link')
const copyBtn = document.querySelector('#copyBtn')

// Set event listener
copyBtn.addEventListener('click', copyLink)
copyBtn.addEventListener('mouseout', resetTooltip)

// Define function to copy link and change tooltip
function copyLink() {
  // copy
  const el = document.createElement('textarea')
  el.value = link.href
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  // change tooltip
  changeTooltip()
}

function changeTooltip() {
  copyBtn.dataset.originalTitle = `Copied: ${link.href}`
  $('[data-toggle="tooltip"]').tooltip('hide')
  $('[data-toggle="tooltip"]').tooltip('show')
}

function resetTooltip() {
  copyBtn.dataset.originalTitle = 'Copy to clipboard'
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
