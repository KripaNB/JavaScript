/*
* Output:
  Enter a string:Hello and Welcome to Dotnet Tutorials
  H : 1
  e : 4
  l : 4
  o : 5
  a : 2
  n : 2
  d : 1
  W : 1
  c : 1
  m : 1
  t : 4
  D : 1
  T : 1
  u : 1
  r : 1
  i : 1
  s : 1
*/

const prompt = require('prompt-sync')();

var message = prompt("Enter a string: ");
message = message.replaceAll(" ", "");
while(message.length > 0) 
{
    var count = 0;
    for(var j = 0; j < message.length; j++)
    {
        if (message[0] == message[j])
        {
            count++;
        }
    }
    console.log(message[0] + " : " + count);
    message = message.replaceAll(message[0], "");
}