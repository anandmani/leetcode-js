/**
 * @param {string} s
 * @return {string}
 */

let initialiseTable = (len) => {
    let table = []
    let row = new Array(len).fill(false)
    for(let i=0; i<len; i++){
        table.push([...row]) //dont push row everytime as it'll push my reference and mind fuck
    }
    return table
}

var longestPalindrome = function(s) {
    let table = initialiseTable(s.length)
    let longest = ""
    
    for(let i=0; i< s.length; i++){
        table[i][i]= true
        longest = s[i]
    }
    
    for(let i=0; i< s.length-1; i++){
        if(s[i]===s[i+1]){
            table[i][i+1] = true
            longest = s.substring(i,i+1 + 1)
        }
        else{
            table[i][i+1] = false
        }
    }
    
    
    for(let len=3; len <= s.length; len ++){
        for(let i= 0; i<= s.length - len; i++){
            let j = len + i - 1
            if(s[i]===s[j] && table[i+1][j-1]){
                table[i][j] = true
                longest = s.substring(i,j+1)
            }
        }
    }
    
    return longest
};