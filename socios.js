$( document ).ready(function() {

    up = 0;

      $("#doc").empty();
      $.getJSON("timeline.json", function( data ) {
  			$.each( data.items, function( key, mensaje) {
            $( "<img>" ).attr({
              "src": mensaje.avatar,
              "align": 'left'}).appendTo( "#doc" );
            if(key == 0){
              $( "<span>" ).html(mensaje.author).appendTo( "#doc" );
            }else{
              $( "<p>" ).html(mensaje.author).appendTo( "#doc" );
            }
            $( "<h2>" ).html(mensaje.title).appendTo( "#doc" );
            $("<input>").attr({
              'type': 'button',
              'value': 'Leer mas',
              'onclick': 'mostrar(1' + key + ')',
              "id":"leermas"
            }).appendTo("#doc");
            $("#doc").append("</br></br>")
            $("<div>").attr({
              'id': "1" + key,
              'style': "display:none;",
            }).appendTo("#doc");
            $( "<p>" ).html(mensaje.date).appendTo( "#1" + key );
            $( "<p>" ).html(mensaje.contenido).appendTo( "#1" + key);
            $("<input>").attr({
              'type': 'button',
              'value': 'Ocultar',
              'onclick': 'ocultar(1' + key + ')',
            }).appendTo("#1" + key);
            $("#1" + key).append("</br></br>")
  			});
		  });

      $("#ultimo").empty();
      $.getJSON("update.json", function( data ) {
  			$.each( data.items, function( nuevos, mensaje) {
          $( "<img>" ).attr({
            "src": mensaje.avatar,
            "align": 'left'}).appendTo( "#ultimo" );
            if(nuevos == 0){
              $( "<span>" ).html(mensaje.author).appendTo( "#ultimo" );
            }else{
              $( "<p>" ).html(mensaje.author).appendTo( "#ultimo" );
            }
            $( "<h2>" ).html(mensaje.title).appendTo( "#ultimo" );
            $("<input>").attr({
              'type': 'button',
              'value': 'Leer mas',
              'onclick': 'mostrar(3' + nuevos + ')',
              "id":"leermas"
            }).appendTo("#ultimo");
            $("#ultimo").append("</br></br>")
            $("<div>").attr({
              'id': "3" + nuevos,
              'style': "display:none;"
            }).appendTo("#ultimo");
            $( "<p>" ).html(mensaje.date).appendTo( "#3" + nuevos);
            $( "<p>" ).html(mensaje.contenido).appendTo( "#3" + nuevos);
            $("<input>").attr({
              'type': 'button',
              'value': 'Ocultar',
              'onclick': 'ocultar(3' + nuevos + ')',
            }).appendTo("#3" + nuevos);
            $("#3" + nuevos).append("</br></br>")
            up = nuevos + 1;
  			});
        if(up != 0){
          $( "<p>" ).html("Update("+up+")").appendTo( "#boton" );
        }
		  });



      $("#boton").click(function(){
        document.getElementById("update").style.display = "block";
        $('#boton').html("")

      });

    $("#myline").empty();
    $.getJSON("myline.json", function( data ) {
			$.each( data.items, function( key, mensaje) {
        $( "<img>" ).attr({
          "src": mensaje.avatar,
          "align": 'left'}).appendTo( "#myline" );
          if(key == 0){
            $( "<span>" ).html(mensaje.author).appendTo( "#myline" );
          }else{
            $( "<p>" ).html(mensaje.author).appendTo( "#myline" );
          }
          $( "<h2>" ).html(mensaje.title).appendTo( "#myline" );
          $("<input>").attr({
            'type': 'button',
            'value': 'Leer mas',
            'onclick': 'mostrar(2' + key + ')',
            "id":"leermas"
          }).appendTo("#myline");
          $("#myline").append("</br></br>")
          $("<div>").attr({
            'id': "2" + key,
            'style': "display:none;"
          }).appendTo("#myline");
          $( "<p>" ).html(mensaje.date).appendTo( "#2" + key );
          $( "<p>" ).html(mensaje.contenido).appendTo( "#2" + key);
          $("<input>").attr({
            'type': 'button',
            'value': 'Ocultar',
            'onclick': 'ocultar(2' + key + ')',
          }).appendTo("#2" + key);
          $("#2" + key).append("</br></br>")
			});
	  });


});
