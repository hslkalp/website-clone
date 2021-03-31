const mobileMenu = document.getElementById('mbl-menu')
const mobileList = document.getElementById('mobile-list')
const mblMenuCloseBtn = document.getElementById('menu-close-btn')
const mblMenuOpenBtn = document.getElementById('menu-open-btn')
const searchBtn = document.getElementById('search-btn')
const searchForm = document.getElementById('search-form')
const closeFormBtn = document.getElementById('close-search-form')
const mobileSearchBtn = document.getElementById('mobile-search-btn')
const userMenu = document.getElementById('user-menu')
mblMenuCloseBtn.addEventListener('click', function () {
  mobileList.style.display = 'none'
})

mblMenuOpenBtn.addEventListener('click', function () {
  if (mobileList.style.display === 'block') {
    mobileList.style.display = 'none'
  } else {
    mobileList.style.display = 'block'
  }
})

searchBtn.addEventListener('click', function () {
  if (searchForm.style.display === 'block') {
    searchForm.style.display = 'none'
  } else {
    searchForm.style.display = 'block'
  }
})

closeFormBtn.addEventListener('click', function () {
  if (searchForm.style.display === 'block') {
    searchForm.style.display = 'none'
  } else {
    searchForm.style.display = 'block'
  }
})

mobileSearchBtn.addEventListener('click', function () {
  if (mobileList.style.display === 'block') {
    mobileList.style.display = 'none'
    setTimeout(function () {
      userMenu.style.display = 'block'
      searchForm.style.display = 'block'
    }, 100)
  } else {
    mobileList.style.display = 'block'
  }
})
