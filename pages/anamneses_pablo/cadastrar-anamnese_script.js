function validateForm() {
    let isValid = true;
    let requiredFields = document.querySelectorAll('#anamneseForm input[type="text"], #anamneseForm input[type="date"]');
    let radioGroups = ['concluidoultimotratamento', 'tratamentomedico', 'medicamento', 'diabetico', 'cardiopata', 'hipertenso', 'hemorragia', 'infectocontagiosa', 'alergiamedicamento'];

    // Check text and date inputs
    requiredFields.forEach(function(input) {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    // Check radio button groups
    radioGroups.forEach(function(group) {
        let radios = document.getElementsByName(group);
        let isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            isValid = false;
            radios.forEach(radio => radio.closest('.radio-container').style.borderColor = 'red');
        } else {
            radios.forEach(radio => radio.closest('.radio-container').style.borderColor = '');
        }
    });

    return isValid;
}

function saveAndPrint() {
    if (validateForm()) {
        let formData = new FormData(document.getElementById('anamneseForm'));
        let formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        localStorage.setItem('anamneseData', JSON.stringify(formObject));
        window.open('listagem_anamneses.html', '_blank');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
