
isPalindrome= (s) => {
  for(let i =0; i<s.length; i++){
      if(s[i] !== s[s.length-1-i]) return false
  }
         return true
}

var longestPalindrome = function(s) {
  let substrs = []
  let longest
  if(s.length){
      longest = s[0]
  }
  else{
      return ""
  }
  for(let i=0; i<s.length - 1; i++){
      substrs.push(s[i])
      for(let j=i+1; j<s.length; j++){
          let current = substrs[substrs.length-1]+s[j]
          substrs.push(current)
          if(isPalindrome(current) && current.length > longest.length){
              longest = current
          }
      }
  }
  substrs.push(s[s.length-1])
  // console.log("substrings are", substrs)
  return longest
  
};