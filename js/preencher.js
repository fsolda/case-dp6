function preencher(nomeDoCampo, conteudo) {
    if (conteudo != '') {
        ga('send', 'event', 'contato', nomeDoCampo, 'preencheu', {
            'transport': 'beacon',
            'hitCallback': function () { document.location = '#'; }
        });
    }
}

function enviar() {
    ga('send', 'event', 'contato', 'enviado', 'enviado', {
        'transport':'beacon',
        'hitCallback':function(){document.location = '#';}
    });
}