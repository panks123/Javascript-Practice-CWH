// POST request using fetch api

console.log('js23.2')

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create"; 
    data = '{"name":"panks1902311","salary":"12322","age":"24"}' // data to be sent
    params = {
        method:'post',
        headers: {
            // 'Content-Type': 'application/json' // this header didn't work
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: data
        // If data is a string then we have to pass it as string only but if the data is not string, it's an object then:
        // body:JSON.stringify(data) // We have to convert it to a string (JSON.stringify converts anything to string)
    }
    fetch(url, params).then(response=> response.json())
    .then((data) => {
        console.log(data) // It prints the response sent after POST request is successful 
    })
}

postData()