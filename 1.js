


const printDiamond = function(h,char) {
	
	const printChar = function(n,char) {
      
      if(n<1) {
          
		return'';
        
      } else {
      
		return char+printChar(n-1,char);
	}
      
   };
    
	const helper = function(num, space, chars) {
      
      if(num<0) {
          
		return"";
      }
      
	console.log(printChar(space,' ')+printChar(chars,char));
      
      if(num>Math.ceil((x)/2)+1) {
        
			helper(num-1,space-1,chars+2);
      
      } else if(num<Math.ceil((x)/2)) {
        
			helper(num-1,space+1,chars-2);
        
      } else if(num===Math.ceil(x/2)+1) {
        
			helper(num-2,0,x);
      }
      
	}
    
	const x=2*Math.floor(h/2)+1;
	helper(x,Math.floor(x/2),1);
};

printDiamond(6, "A")