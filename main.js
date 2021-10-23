const LinksSocialMedia = {
  github: 'andres-alippi',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) // consegue a info de um site sem saber o que é
    .then(response => response.json()) //"promise": com a arrow function transforma essa info em json
    .then(data => {
      //outra promise combinada com func. arr para pegar a chave "name" do json
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
/*
  camelCase
  PascalCase
  snake_case
*/

/*
Arrow function

sem argumento:
() => {código}     se o código for uma linha  () => código

um argumento:
arg => {}

mais de um argumento:
(arg1, arg2) => {}



*/
