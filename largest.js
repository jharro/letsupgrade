function largestNumber(numbers){
    
        mayor=numbers[0];
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index]>mayor) {
                mayor=numbers[index];
            }
            
            
        }
        return mayor;
        
    }


listaNumbers=[1999,200,30,4,55]
largestNumber(listaNumbers)
alert(mayor)