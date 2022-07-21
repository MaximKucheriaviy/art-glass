export default function main(){
    // // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого. // //not found 
    const people1 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, { name: 'Jhon', know: ['Ivan'] }, { name: 'Eva', know: ['Jhon', 'Ivan'] }, { name: 'Ivan', know: ['Jhon', 'Alex'] }, ]; //Not found 
    const people2 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, { name: 'Jhon', know: [] }, { name: 'Eva', know: [] }, { name: 'Ivan', know: ['Jhon', 'Alex'] }, ]; 
    const people3 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, { name: 'Jhon', know: [] }, { name: 'Eva', know: ['Alex', 'Jhon'] }, { name: 'Ivan', know: ['Jhon', 'Alex'] }, ]; //Not found const 
    const people4 = [{ name: 'Alex', know: ['Eva', 'Jhon'], }, { name: 'Ivan', know: ['Jhon', 'Alex'] }, { name: 'Eva', know: ['Alex','Jhon'] }, { name: 'Jhon', know: [] }, ]; 

    function findNarzis(arr = []){
        const nothigInKnow = [];
        arr.forEach(item, index => {
            if(item.know.length === 0){
                nothigInKnow.push(arr[index]);
            }
        })
        if(nothigInKnow.length === 0){
            return "not found";
        }
        const result = arr.find(item => arr.every(item2 => item2.know.contains(item.name)));
        if(result){
            return result;
        }
        return "not found";
    }
    findNarzis(people1);
}

