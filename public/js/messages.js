$(document).ready(() => {    

    $.ajax({
        url: '/messages/get/' + interlocutor,
        success: (privateMessages) => {

            $.each(privateMessages, (key, privateMessage) => {
                $('.container').append('<p><b>'
                    +privateMessage.sender + ': </b>'
                    +privateMessage.text+'</p>');
            })
        }
    })

})