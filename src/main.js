containerDiv = document.getElementById('container');

function startDelivery() {
    document.getElementById("startDeliveryButton").remove();
    createDeliveryForm();
}
function createDeliveryForm() {
    let formDelivery = this.containerDiv.appendChild(document.createElement('form'));
    formDelivery.name = 'deliveryForm';
    formDelivery.id = 'deliveryForm';
    formDelivery.className = 'delivery-formDelivery';

    createPhoneNumber(formDelivery);
    createCodeNumber(formDelivery);
    formDelivery.appendChild(document.createElement("br"));
    createSuccesDeliveryButton(formDelivery);

}
function createPhoneNumber(formDelivery) {
    let phoneNumberDiv = formDelivery.appendChild(document.createElement('div'));
    phoneNumberDiv.className = 'delivery-form__div';
    let phoneNumberLabel = document.createElement('label');
    phoneNumberLabel.className = 'delivery-form__label'
    phoneNumberLabel.innerText = "Numer telefonu:";
    phoneNumberDiv.appendChild(phoneNumberLabel);
    let phoneNumberInput = phoneNumberDiv.appendChild(document.createElement('input'));
    phoneNumberInput.type = 'text';
    phoneNumberInput.name = 'phoneNumber';
}

function createCodeNumber(formDelivery) {
    let codeNumberDiv = formDelivery.appendChild(document.createElement('div'));
    let codeNumberLabel = document.createElement('label');
    codeNumberLabel.className = 'delivery-form__label'
    codeNumberLabel.innerText = "Kod odbioru:";
    codeNumberDiv.appendChild(codeNumberLabel);
    codeNumberDiv.className = 'delivery-form__div';
    let codeNumberInput = codeNumberDiv.appendChild(document.createElement('input'));
    codeNumberInput.type = 'text';
    codeNumberInput.name = 'codeNumber';
}
function createSuccesDeliveryButton(formDelivery) {
    let succesDeliveryButton = formDelivery.appendChild(document.createElement('button'));
    succesDeliveryButton.innerHTML = "Odbierz paczkę";
    succesDeliveryButton.id = 'succesDeliveryButton'
    succesDeliveryButton.className = 'container__button';
    succesDeliveryButton.onclick = function () {
        succesDelivery()
    };
}
function succesDelivery() {
    document.getElementById("deliveryForm").remove();
    let summaryDiv = this.containerDiv.appendChild(document.createElement('div'));
    summaryDiv.id = "summary";
    let h3 = summaryDiv.appendChild(document.createElement('h3'));
    h3.innerHTML = "Paczka odebrana!"
    let p = summaryDiv.appendChild(document.createElement('p'));
    p.innerHTML = "Zrobiłeś to w czasie 10 sekund! Czy możemy zrobić dla ciebie coś jeszcze?";
    createEndDeliveryButton(summaryDiv);
    createNextDeliveryButton(summaryDiv);
}

function createEndDeliveryButton(summaryDiv) {
    let endDeliveryButton = summaryDiv.appendChild(document.createElement('button'));
    endDeliveryButton.innerHTML = "To wszystko na dziś";
    endDeliveryButton.id = 'endDeliveryButton'
    endDeliveryButton.className = 'container__button';
    endDeliveryButton.onclick = function () {
        endDelivery()
    };
}

function createNextDeliveryButton(summaryDiv) {
    let nextDeliveryButton = summaryDiv.appendChild(document.createElement('button'));
    nextDeliveryButton.innerHTML = "Odbierz kolejną paczkę";
    nextDeliveryButton.id = 'nextDeliveryButton'
    nextDeliveryButton.className = 'container__button';
    nextDeliveryButton.onclick = function () {
        nextDelivery()
    };
}

function nextDelivery() {
    document.getElementById("summary").remove();
    
    createDeliveryForm();
};

function endDelivery() {
    document.getElementById("summary").remove();
    let startDeliveryButton = this.containerDiv.appendChild(document.createElement('button'));
    startDeliveryButton.innerHTML = "Odbierz paczkę";
    startDeliveryButton.id = 'startDeliveryButton'
    startDeliveryButton.className = 'container__button';
    startDeliveryButton.onclick = function () {
        startDelivery()
    };
}