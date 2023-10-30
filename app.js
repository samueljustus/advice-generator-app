const adviceContainer = document.querySelector('.advice')
const button = document.querySelector('.btn')
const adviceNumberContainer = document.querySelector('span')

const getAdvice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    const adviceText = res.data.slip.advice
    const adviceNumber = res.data.slip.id
    adviceContainer.innerText = adviceText
    adviceNumberContainer.innerText = adviceNumber;
}

button.addEventListener('click', getAdvice)