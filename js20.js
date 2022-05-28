// AJAX tutorial

console.log('js20')

// AJAX -- Asynchronous Javascript and XML
// Ajax helps in fetching the data asynchronously without interfering with the existing page
// Note-- Now in modern websites JSON is used instead of XML for fetching data

// AJAX uses XMLHttpRequest object(also called xhr object) to fetch and transfer data
// Data can be transferred in any format(JSON, .html, .txt .. anything) and using any protocol(not necessarily http)

let btn=document.getElementById('fetchbtn');
btn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    // When the button gets clicked , AJAX request will happen

    // AJAX request to fetch data --> Steps:

    // 1. instantiate an xhr object
    const xhr=new XMLHttpRequest();
    // 2. open the object

    // xhr.open('GET','pankaj.txt',true); // here first argument 'GET' means we're doing GET request , 2nd argument is 
                                          // from where we want to fetch data and third argument is whether this data fetching will 
                                          // be asynchronous or not, if yes then true

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); // POST request
    xhr.getResponseHeader('Content-type','application/json');

    // 3.(optional step) what to do on progress(When data fetching is in progress)// e.g. it is used to show a spinner when the 
    // page is still loading the request
    xhr.onprogress=function () {
        console.log('On progress...'); 
    }
    
    // xhr.onreadystatechange=function () {
        // This is an old function, It runs whenever the XMLHttp request change its state
    //     console.log('ready state is:',xhr.readyState);//there are five values for xhr.readyState:0(unsent request),1(opened),2(send() has been called),3(Loading- Downloading data from source),4(Done)
    // }


    // 4. what to do when response is ready
    xhr.onload=function () {
        if(xhr.status===200) // if response oK on http request
        {
            console.log(this.responseText);
        }
        else
        {
            console.error('Some error occured');
        }
        
    }

    // 5. send the request(at last)
    params=`{"name":"test13","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('Everything done!')
}

// Fetching the data using XMLHttpRequest and populating it into the DOM

// Adding EventListener to populate button

let popbtn=document.getElementById('popbtn');
popbtn.addEventListener('click',popHandler);

function popHandler() {
    console.log('You have clicked populate button');
    // instantiate an xhr object
    const xhr=new XMLHttpRequest();
    // open the object
       xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    // what to do on progress(optional)// e.g. it is used to show a spinner when the page is still loading the request
    xhr.onprogress=function () {
        console.log('On progress');
        
    }

    // what to do when response is ready
    xhr.onload=function () {
        if(xhr.status===200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            console.log(obj.data);
            let list=document.getElementById('list');
            str="";
            for (key in obj.data)
            {
                str+=`<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML=str;
        }
        else
        {
            console.error('Some error occured');
        }
        
    }

    // send the request(at last)
    
    xhr.send();

    console.log('Everything done! in popHandler')
    
}