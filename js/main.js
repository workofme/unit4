$(document).ready(function(){
    $('.item').click(function(){
        var action = $(this).attr('action');
        if(action == 'objtives'){
            $('#iframe').attr('src' , 'objtives.html')
        }
        switch(action) {
            case 'objtives':
                $('#iframe').attr('src' , 'objtives.html')
              break;
            case 'vocabulary':
                $('#iframe').attr('src' , 'vocabulary.html')
              break;
              case 'presentation':
                $('#iframe').attr('src' , 'presentation.html')
              break;
            default:
              // code block
          }
    })

    
})