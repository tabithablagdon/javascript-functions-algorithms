// multTable takes an input 'n' and creates a n by n multiplication table, formatted nicel

function multTable(n) {
    
  var rows = 1; // rows counter
  var columns = 1; // columns counter
  var line = ""; // accumulates numbers for each row
  var num = 1; 
  
  while (columns <= n) {
    while (rows <= n) {
	  num = rows * columns;
	  if (num < 10) {
	    line += num + "   ";
	  } else if (num < 100) {
	    line += num + "  ";
	  } else {
	    line += num + " ";
	  }
	  rows++;
    }
	line = line.slice(0, line.length-1);
	console.log(line);
	columns++;
	rows = 1; // reset rows
	line = ""; //reset line
  }
}

multTable(12);


/* Output

   
1   2   3   4   5   6   7   8   9   10  11  12 
2   4   6   8   10  12  14  16  18  20  22  24 
3   6   9   12  15  18  21  24  27  30  33  36 
4   8   12  16  20  24  28  32  36  40  44  48 
5   10  15  20  25  30  35  40  45  50  55  60 
6   12  18  24  30  36  42  48  54  60  66  72 
7   14  21  28  35  42  49  56  63  70  77  84 
8   16  24  32  40  48  56  64  72  80  88  96 
9   18  27  36  45  54  63  72  81  90  99  108
10  20  30  40  50  60  70  80  90  100 110 120
11  22  33  44  55  66  77  88  99  110 121 132
12  24  36  48  60  72  84  96  108 120 132 144
   


*/
