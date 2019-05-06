var message_prompt = '<i>message></i> ';
var letter = 0;
var txt = ['NOW we gonna talk SCIENCE',
           'and NOW for something completely different SCIENCE',
           'SCIENCE in the NOW, for the NOW and from the NOW'];
var speed = 50;

setTimeout( function() { window_message( 0 ) }, 3000 );
document.getElementById("window_message").innerHTML += message_prompt;

function window_message(i)
{
  if (letter < txt[i].length)
  {
     document.getElementById("window_message").innerHTML += txt[i].charAt(letter);
     letter++;
     setTimeout( function() { window_message( i ) }, speed);
  }
  else
  {
      i++;
      if (i < txt.length)
      {
          letter = 0;
          document.getElementById("window_message").innerHTML += '<br/>';
          document.getElementById("window_message").innerHTML += message_prompt;
          setTimeout( function() { window_message( i++ ) }, 3000);
      }
  }
}
