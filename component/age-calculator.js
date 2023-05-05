import {reactive, html, watch} from 'https://esm.sh/@arrow-js/core';

//Values for the display of the input form values default as --
const outputs = reactive({
    day: "--",
    month: "--",
    year: "--"
})

//Represents values entered into the form for
const values = reactive({
    day: 0,
    month: 0,
    year: 0
})



export function submitHandler() {
    const ageForm = document.getElementById("form")
    ageForm.addEventListener('submit', (event) => {
        
        values.day = document.getElementById("day-input").value
        values.month = document.getElementById("month-input").value
        values.year = document.getElementById("year-input").value

        event.preventDefault();

        

        //If year is greater than current year then its not a valid date
        if(values.year > new Date().getFullYear()) {
            document.getElementById("year-validation").innerText = "Enter a date in the past"
            outputs.month = "--"
            return false;
        }
        else if (values.year == new Date().getFullYear()) {
        }
        else {
        }

        /* Day Validation */

        if(values.day < 1 || values.day > 31) {
            document.getElementById("day-validation").innerText = "Not a valid number"
            outputs.day = "--"
            return false;
        }
        else {
            document.getElementById("day-validation").innerText = ""
            outputs.day = values.day
        }

        /* Month Validation */
        if(values.month < 1 || values.month > 12) {
            document.getElementById("month-validation").innerText = "Enter a valid number"
            outputs.month = "--"
            return false;
        }
        else {
            document.getElementById("month-validation").innerText = ""
        }

        var dateDiff = new Date() - new Date(values.year, values.month, values.day)
        

        
        console.log(values.day)

        /* ArrowJS reactive values aren't working for me so I just updated the inner text */
        console.log(dateDiff)
        
        
        document.getElementById("form-result-year").innerText = 
            Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
        document.getElementById("form-result-month").innerText =
            Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        document.getElementById("form-result-day").innerText =
            Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    } )
}

//Main Export

export const app = html`
    <div class="age-calculator-container">
        <div class="input-form-container">
            <form name="form" id="form">
                <div class="form-row-inputs">
                    <div class="form-option">
                        <label>Day</label>
                        <input id="day-input" name="day" type="number" value="0"/>
                        <p id="day-validation"></p>
                    </div>
                    <div class="form-option">
                        <label>Month</label>
                        <input id="month-input" name="month" type="number" value="0"/>
                        <p id="month-validation"></p>
                    </div>
                    <div class="form-option">
                        <label>Year</label>
                        <input id="year-input" name="year" type="number" value="0"/>
                        <p id="year-validation"></p>
                    </div>
                    <div></div>
                </div>
                <div class= "form-row-submit">
                    <hr class="break">
                    <div class="form-button-container">
                        <button class="form-button" type="submit">
                            <img src="../assets/images/icon-arrow.svg">
                        </button>  
                    </div> 
                </div>
                <div class="form-results">
                    <h2 class="h2-result-year">
                        <span id="form-result-year">${outputs.day}</span> years
                    </h2>
                    <h2 class="h2-result-month">
                        <span id="form-result-month">${outputs.month}</span> months
                    </h2>
                    <h2 class="h2-result-day">
                        <span id="form-result-day">${outputs.year}</span> days
                    </h2>
                </div>
            </form>
        </div>
    </div>
`;
/*
formReactive.ageForm.addEventListener('submit', (event) => {
    event.preventDefault();
} )
*/