a={
    "company":"myCompany","companyContacts":{
        "phone":123456789,
        "email":"1234567@gmail.com",
    },
    "employee":[
        {
            "id":101,
            "name":"john",
            "contacts":[
                "email1@gmail.com","email2@gmail.com"
            ]
        },
        {
            "id":102,
            "name":"lisa",
            "contacts":null
        }
    ]
}
b=JSON.stringify(a)
// console.log(typeof(b))
c=JSON.parse(b)
// console.log(c)
//  write code to fetch "give again" value from the given object
const user={
    "name":["ABC","DEF","GHI"],
    "age":28,
    "course":["FSD-2","Python-2"],
    "address":["T1","T2",{"T3":"GIVE AGAIN"}]
}
// console.log(user.address[2].T3)
// write 1 json string with date property (yyyy-mm-dd) and print date in IST
dd=new Date;
// console.log(dd)
d=`{
    "name":"ABC",
    "DOB":"2003-04-08"
}`
// b=JSON.stringify(d)
d=JSON.parse(d)
console.log(d)
// d1=d1.toLocaleString('en-IN');
// console.log(b.date)
c=new Date(d.DOB)
// console.log(c)
// get json object values using for loop
data={
    a1:[1,2,3,4,5,6,7,8,9,10]
}
for (let i of data.a1){
    console.log(i)
}
for (let i of a.employee){
    console.log(i)
}
