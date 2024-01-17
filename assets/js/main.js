
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const email2 = document.getElementById('profile.email2')
    email2.innerText = profileData.email2
    email2.href = `mailto:${profileData.email2}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="assets/images/svg/${skill.name}.svg" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(portfolio => `                
        <li>
            <span class="title github">${portfolio.name}</span>
            <a href="${portfolio.url}" target="_blank">
            ${portfolio.url}</a>
        </li>
    `).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => `
        <li>
            <span class="title">${experience.name}</span>
            <p class="calendar">${experience.period}</p>
            <p>${experience.description}</p>
        </li>
    `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortolio(profileData)
    updateProfessionalExperience(profileData)
})()
