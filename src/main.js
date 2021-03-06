containerDiv = document.getElementById('container');
isCodeNumberInvalid = true;
isPhoneNumberInvalid = true;

/**
 * Creates loader, add class that allow loader to spin
 */
function loader(ms, loaderButton) {
    loaderButton.classList.add('spin');
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * When button is clicked it appends unit test,creates a loader for 1 s then deletes 
 * the button from the page and adds form to the page
 */
function startDelivery() {
    let script = document.createElement('script');
    script.src = 'test-start.js';
    containerDiv.appendChild(script);

    let loaderButton = document.getElementById('loader');
    loaderButton.style.display = "block";
    document.getElementById("startDeliverySpan").style.display = "none";
    document.getElementById("startDeliveryButton").disabled = true;
    loader(1000, loaderButton).then(() => {
        loaderButton.classList.remove('spin');
        loaderButton.style.display = "none";
        document.getElementById("startDeliveryButton").remove();
        createDeliveryForm();
    });
}

/**
 * Creates html form and counts time from the moment it's created
 */
function createDeliveryForm() {

    let formDelivery = this.containerDiv.appendChild(document.createElement('form'));
    formDelivery.name = 'deliveryForm';
    formDelivery.id = 'deliveryForm';
    formDelivery.className = 'delivery-form';

    createPhoneNumber(formDelivery);
    createCodeNumber(formDelivery);

    formDelivery.appendChild(document.createElement("br"));

    let timeStart = new Date();
    createSuccesDeliveryButton(formDelivery, timeStart);
}

/**
 * Creates html div for phone number with input, label and error message;
 * validates the value on change
 */
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
    phoneNumberInput.id = 'phoneNumber'
    phoneNumberInput.className = 'delivery-form__input'

    let phoneNumberError = phoneNumberDiv.appendChild(document.createElement('span'));
    phoneNumberError.id = 'phoneNumberError';
    phoneNumberError.className = "delivery-form__span--error";
    phoneNumberError.innerHTML = '<p>Numer telefonu musi sk??ada?? si?? z 9 cyfr (0-9).</p>';

    phoneNumberInput.onchange = function () { validatePhoneNumber() };
}

/**
 * Creates html div for code number with input, label and error message ;
 * validates the value on change
 */
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
    codeNumberInput.className = 'delivery-form__input'

    let codeNumberError = codeNumberDiv.appendChild(document.createElement('span'));
    codeNumberError.id = 'codeNumberError';
    codeNumberError.className = "delivery-form__span--error";
    codeNumberError.innerHTML = '<p>Kod odbioru musi sk??ada?? si?? z 4 cyfr (0-9).</p>';

    codeNumberInput.onchange = function () { validateCodeNumber() };
}

/**
 * Creates html button which is enabled to click if form validtions is true,
 * on click stop time count which started when form was created 
 */
function createSuccesDeliveryButton(formDelivery, timeStart) {
    let succesDeliveryButton = formDelivery.appendChild(document.createElement('button'));
    succesDeliveryButton.innerHTML = "Odbierz paczk??";
    succesDeliveryButton.id = 'succesDeliveryButton'
    succesDeliveryButton.className = 'container__button';
    succesDeliveryButton.type = 'button';
    succesDeliveryButton.disabled = true;
    succesDeliveryButton.onclick = function () {
        let timeEnd = new Date();
        let deliveryTime = Math.round(timeEnd - timeStart) / 1000;
        succesDelivery(deliveryTime.toFixed(1))
    };
}

/**
 * When button is clicked creates html div for summary message, show how much time 
 * the form taken, appends the unit test file
 */
function succesDelivery(deliveryTime) {
    let deliverySummary = this.containerDiv.appendChild(document.createElement('div'));
    deliverySummary.className = 'modal';
    deliverySummary.id = 'summary';

    let summaryDiv = deliverySummary.appendChild(document.createElement('div'));
    summaryDiv.className = 'modal__div';

    let h3 = summaryDiv.appendChild(document.createElement('h3'));
    h3.innerHTML = "Paczka odebrana!"

    let p = summaryDiv.appendChild(document.createElement('p'));
    p.innerHTML = "Zrobi??e?? to w czasie " + deliveryTime + " sekund! Czy mo??emy zrobi?? dla ciebie co?? jeszcze?";

    createEndDeliveryButton(summaryDiv);
    createNextDeliveryButton(summaryDiv);

    let script = document.createElement('script');
    script.src = 'test-end.js';
    containerDiv.appendChild(script);
}

/**
 * Creates button which takes you to starting page
 */
function createEndDeliveryButton(summaryDiv) {
    let endDeliveryButton = summaryDiv.appendChild(document.createElement('button'));
    endDeliveryButton.innerHTML = "To wszystko na dzi??";
    endDeliveryButton.id = 'endDeliveryButton'
    endDeliveryButton.className = 'container__button';
    endDeliveryButton.onclick = function () {
        endDelivery()
    };
}

/**
 * Creates button which takes you to form page
 */
function createNextDeliveryButton(summaryDiv) {
    let nextDeliveryButton = summaryDiv.appendChild(document.createElement('button'));
    nextDeliveryButton.innerHTML = "Odbierz kolejn?? paczk??";
    nextDeliveryButton.id = 'nextDeliveryButton'
    nextDeliveryButton.className = 'container__button';
    nextDeliveryButton.onclick = function () {
        nextDelivery()
    };
}

/**
 * When button is clicked it removes form and summary from the page,
 * sets validation flags to true then creates a new form
 */
function nextDelivery() {
    document.getElementById("deliveryForm").remove();
    document.getElementById("summary").remove();
    setFormValidity(true);
    createDeliveryForm();
};

/**
 * When button is clicked it removes form and summary from the page,
 * sets validation flags to true, then creates a new starting button
 */
function endDelivery() {
    document.getElementById("deliveryForm").remove();
    document.getElementById("summary").remove();
    setFormValidity(true);

    let startDeliveryButton = this.containerDiv.appendChild(document.createElement('button'));
    startDeliveryButton.innerHTML = "Odbierz paczk??";
    startDeliveryButton.id = 'startDeliveryButton'
    startDeliveryButton.type = 'button';
    startDeliveryButton.className = 'container__button';
    startDeliveryButton.innerHTML = '<span id="startDeliverySpan">Odbierz paczk??</span><div class="loader" id="loader"></div>';
    startDeliveryButton.onclick = function () {
        startDelivery()
    };
}

/**
 * Checks if package's phone number is valid
 */
function validatePhoneNumber() {
    let phoneNumber = document.forms["deliveryForm"]["phoneNumber"].value;
    if (
        phoneNumber == null ||
        phoneNumber == "" ||
        phoneNumber.length != 9 ||
        !/^[0-9]+$/.test(phoneNumber)
    ) {
        this.isPhoneNumberInvalid = true;
        document.getElementById("phoneNumberError").style.visibility = "visible";
    } else {
        this.isPhoneNumberInvalid = false;
        document.getElementById("phoneNumberError").style.visibility = "hidden";
    }

    validateForm();
}

/**
 * Checks if package's code number is valid
 */
function validateCodeNumber() {
    let codeNumber = document.forms["deliveryForm"]["codeNumber"].value;
    if (
        codeNumber == null ||
        codeNumber === "" ||
        codeNumber.length != 4 ||
        !/^[0-9]+$/.test(codeNumber)
    ) {
        this.isCodeNumberInvalid = true;
        document.getElementById("codeNumberError").style.visibility = "visible";
    } else {
        this.isCodeNumberInvalid = false;
        document.getElementById("codeNumberError").style.visibility = "hidden";
    }

    validateForm();
}

/**
 * Checks if entire form is valid
 */
function validateForm() {
    if (this.isCodeNumberInvalid || this.isPhoneNumberInvalid) {
        document.getElementById("succesDeliveryButton").disabled = true;
        console.log("invalid");
    } else if (!this.isCodeNumberInvalid && !this.isPhoneNumberInvalid) {
        document.getElementById("succesDeliveryButton").disabled = false;
        console.log("valid");
    }
}

/**
 * Sets flags
 */
function setFormValidity(isInvalid) {
    this.isPhoneNumberInvalid = isInvalid;
    this.isCodeNumberInvalid = isInvalid;
}