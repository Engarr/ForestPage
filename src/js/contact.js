const inputuserName = document.querySelector('#username');
const inputEmail = document.querySelector('#email');
const inputQuestion = document.querySelector('#question');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__button');


const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.contact__error');
	errorMsg.classList.add("show-error")
	errorMsg.textContent = msg;
};

const cleanError = (input) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.contact__error');
	errorMsg.classList.remove("show-error")
};
const closePopup=()=>{
	popup.classList.remove("active-popup")
}

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value == '') {
			showError(el, `Musisz uzupełnić to pole`);
		} else {
			cleanError(el);
			
		}
	});
};

const checkEmail = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(inputEmail.value)) {
		cleanError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny');
	}
};

const sendMsg= ()=>{
	const inputs = document.querySelectorAll(".contact__error")
	let errors = 0
	inputs.forEach((el)=>{
		if(el.classList.contains("show-error")){
			errors++
		}
	})
	if(errors === 0){
		popup.classList.add ("active-popup")
	}
		
}

sendBtn.addEventListener('click', (e) => {
	e.preventDefault()
	checkForm([inputuserName, inputQuestion]);
	checkEmail(inputEmail);
	sendMsg()
});
popupBtn.addEventListener("click", closePopup)