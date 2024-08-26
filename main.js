$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-limpar').click(function(){
        $('form').slideUp();

    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();

        $('#lista').append('<li><span>'+ tarefa + '</span></li>');

        $('#tarefa').val('');
        
        });

        $('#lista').on('click', 'li', function(e){
            if(!$(e.target).is('button')) {
                $(this).find('span').toggleClass('line-through');
            }
        });

        $('botao-limpar').on('click',function() {
            $('#lista').empty();
        });
})