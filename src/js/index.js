document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "interactive") {   //same as:  ..addEventListener("DOMContentLoaded".. and   jQuery.ready
        // console.log("All HTML DOM elements are accessible");
    }

    if (event.target.readyState === "complete") {
        console.log("Now external resources are loaded too, like css,src etc... ");
        const chat = document.getElementById('chat-container');
        console.dir(chat);
        console.log(chat);
        window.addEventListener('scroll', function (a,b,c,d) {
            console.log(a);
        })
    }

});
