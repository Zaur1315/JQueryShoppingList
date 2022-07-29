// $('li').click(function(){
//      $(this).css({'color':'gray','text-decoration':'line-through'});
//  })

$('ul').on('click','li',function(){
    $(this).toggleClass('select');
})


$('ul').on('click','span',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove()
    });
})

$('input').keypress(function (e) { 
    if(e.which === 13) {
        let itemText = $(this).val();
        $(this).val('');
       $('ul').append(`<li><span><i class="fa-regular fa-trash-can"></i></span>${itemText}</li>`) 
    }
});


$('h2 span').click(function(){
    $('input').fadeToggle(300);
})