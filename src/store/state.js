let defaultCity = '青岛'
try{
    if(localStorage.city)
    {
        defaultCity = localStorage.city
    }
} catch(e){}
export default{
    city: defaultCity
}