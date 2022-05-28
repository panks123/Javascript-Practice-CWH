// Fetch all the links from a webpage which has a substring 'javascript'
str="javascript";
Array.from(document.links).forEach((items)=>{
    bool=items.href.includes(str);
    if(bool==true){
        console.log(items.href);
    }
})