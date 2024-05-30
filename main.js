$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefa = $('#nova-tarefa').val()
        const novoItem = $(`<li></li>`)
        $(`<p>${novaTarefa} </p>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')

        $('#nova-tarefa').val('')
    })

    $('#todo-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
})