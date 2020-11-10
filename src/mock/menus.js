export function getAccessMenuList() {
  return new Promise((resolve) => {
    const menuList = [
      {
        name: 'home',
        path: '/',
        component: 'home'
      }
    ]
    setTimeout(() => {
      resolve(menuList)
    }, 3000)
  })
}
