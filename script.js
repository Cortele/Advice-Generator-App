let adviceSpan = document.querySelector('.hero-span');
let adviceIdSpan = document.querySelector('.advice-id-span');
const button = document.querySelector('.hero-btn');
let adviceResponse = "" //Declare global variable to be used in fetchAdvice function

// Fetches API URL
async function fetchAdvice() {
    const adviceRequest = await fetch("https://api.adviceslip.com/advice/" 
    + Math.floor(Math.random() * 200))
    adviceResponse = await adviceRequest.json()
}

// Updates HTML on Event Listener
async function update() {
    await fetchAdvice()
    adviceSpan.innerHTML = adviceResponse.slip.advice
    adviceIdSpan.innerHTML = adviceResponse.slip.id
}


// Event Listener
button.addEventListener('click', update)

update()




