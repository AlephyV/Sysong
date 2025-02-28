﻿$(document).ready(function () {
    M.updateTextFields();
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        i18n: {
            cancel: 'Cancelar',
            clear: 'Limpar',
            done: 'Ok',
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Abr',
                'Mai',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez'
            ],
            months: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ],
            weekdays: [
                'Domingo',
                'Segunda-Feira',
                'Terça-Feira',
                'Quarta-Feira',
                'Quinta-Feira',
                'Sexta-Feira',
                'Sábado'
            ],
            weekdaysShort: [
                'Dom',
                'Seg',
                'Ter',
                'Qua',
                'Qui',
                'Sex',
                'Sáb'
            ],
            weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
        }
    });
    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown({
        hover: true,
        alignment: 'right',
        coverTrigger: false,
        constrain_width: true,
        focusedIndex: 2
    });
    $('.chips').chips();
});

function logout() {
    $("#logout-form").submit();
}