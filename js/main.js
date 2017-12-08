var $signupForm = $('.form')
var $inputField = $('#todo')
var $list = $('.list')

$signupForm.on('submit', function(evt) {
    evt.preventDefault()
    var $newItem = $('<p>')
    $newItem.append('<input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $inputField.val() + '</span><i class="glyphicon glyphicon-remove"></i>')
    $list.append($newItem)
    $inputField.val('')
})

$list.on('click', 'input', function() {
    $(this).parent().toggleClass('strike')
})

$list.on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active')
})

$list.on('click', '.glyphicon-remove', function() {
    $(this).parent().remove()
})