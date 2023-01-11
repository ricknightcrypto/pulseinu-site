function openModal(message, success) {
    // instanciate new modal
    var modal = new tingle.modal({
        footer: false,
        stickyFooter: false,
        closeMethods: ['button', 'escape'],
        closeLabel: "Close",
        cssClass: [success ? 'success-modal' : 'fail-modal'],
        onOpen: function() {
        },
        onClose: function() {
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    // set content
    modal.setContent('<p>' + message + '</p>');

    /*// add a button
    modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
        // here goes some logic
        modal.close();
    });

    // add another button
    modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
        // here goes some logic
        modal.close();
    });*/

    // open modal
    modal.open();
}