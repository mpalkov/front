export type User = { name: string; username: string }
export type UserList = Array<User & { password: string }>

// este archivo se encarga de hacer requests al API del backend

// función para obtener datos de usuario mismo 
export async function getUser() {
  const request = await fetch('/current.json')
  const user: User = await request.json()
  return user
}

// función para login
// accede al endpoint POST /auth/login
export async function login(username: string, password: string) {
  const request = await fetch('/users.json')
  const usersJson: UserList = await request.json()
  return usersJson.find(s => s.password === password && s.username === username)
}


// función para signup
// accede al endpoint POST /auth/signup
// ...

// función para edit
// accede al endpoint PUT /user/edit
// ...

// función para delete
// accede al endpoint DELETE /user/delete
// ...

