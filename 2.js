
const printDiamond=function(h, char) {
    
	if(h%2==0)
		h+=1;
    
	for(let i=1;i<=h;i+=2) {
      
      let x=""; 
      let y=""; 
      
		for(let j=1;j<=i;j++)
			x+=char;
      
		for(let k=(h-i)/2;k>=1;k--) {
			y+=" "
		}
      
		console.log(y+x);
	}
    
	for(let a=1;a<=h-2;a+=2) {
      
		let b="";
		let c="";
      
		for(let n=1;n<=h-a-1;n++)
			b+=char;
      
		for(let m=1;m<=a;m+=2)
			c+=" ";
      
		console.log(c+b);
	}
};
  
printDiamond(7, "A");