var isValid = function(s) {
    
    const openParen = '(',
	 closedParen = ')',
	 openCurly = '{',
	 closedCurly = '}',
	 openBracket = '[',
	 closedBracket = ']',
     openParens = '({[',
     closedParens = ']})',
          isOdd = s.length % 2 !== 0;
      let temp = '';
    
	if(!s.length)  {
        return true;
	} else if ((s.length < 2) || 
               (isOdd) || 
               (s[0] === closedParen) || 
               (s[0] === closedCurly) || 
               (s[0] === closedBracket) || 
               (s[s.length-1] === openParen) || 
               (s[s.length-1] === openCurly) || 
               (s[s.length-1] === openBracket)) {
        return false;
    }
	 
	for (let i = 0; i < s.length; i++) {
	    const curr = s[i];
        if(curr === closedParen ||curr === closedCurly ||curr === closedBracket) {
               
            if (s[i] === temp[temp.length-1]) {
                temp = temp.slice(0,temp.length-1);              
                continue;           
            }
            temp = '';
            return false;
        }            
        
        if(curr === openParen) {
            temp += closedParen
        } else if (curr === openCurly) {
            temp += closedCurly;
        } else {
            temp += closedBracket;
        }
    }
    return true;
};