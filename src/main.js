function startDelivery() {
    document.getElementById("startDeliveryButton").remove();
    createDeliveryForm();
}
function createDeliveryForm() {
    let containerDiv = document.getElementById('container');

    let formDelivery = containerDiv.appendChild(document.createElement('formDelivery'));
    formDelivery.name = 'deliveryForm';
    formDelivery.id = 'deliveryForm';
    formDelivery.className = 'delivery-formDelivery';

    let phoneNumberDiv = formDelivery.appendChild(document.createElement('div'));
    phoneNumberDiv.className = 'delivery-form__div';
    let phoneNumberLabel = document.createElement('label');
    phoneNumberLabel.className = 'delivery-form__label'
    phoneNumberLabel.innerText = "Numer telefonu:";
    phoneNumberDiv.appendChild(phoneNumberLabel);
    let phoneNumberInput = phoneNumberDiv.appendChild(document.createElement('input'));
    phoneNumberInput.type = 'text';
    phoneNumberInput.name = 'phoneNumber';

    let codeNumberDiv = formDelivery.appendChild(document.createElement('div'));
    let codeNumberLabel = document.createElement('label');
    codeNumberLabel.className = 'delivery-form__label'
    codeNumberLabel.innerText = "Kod odbioru:";
    codeNumberDiv.appendChild(codeNumberLabel);
    codeNumberDiv.className = 'delivery-form__div';
    let codeNumberInput = codeNumberDiv.appendChild(document.createElement('input'));
    codeNumberInput.type = 'text';
    codeNumberInput.name = 'codeNumber';

    formDelivery.appendChild(document.createElement("br"));

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
}
