
if(numerouno>numero3){
    function multiplicacion(){
    
        var numerouno = document.getElementById('numerouno').value    
        var numerodos = document.getElementById('numerodos').value
        var numerotres = document.getElementById('numerotres').value
        var resultado = parseInt(numerouno) * parseInt(numerodos) * parseInt(numerotres)

        console.log(resultado)
    
        document.getElementById('resultado').value = "La operación es una multiplicación y el resultado es " + resultado 

    } if (numerouno=numerodos){
        function suma(){
            
            var numerouno = document.getElementById('numerouno').value
            
            var numerodos = document.getElementById('numerodos').value

            var numerotres= document.getElementById('numerotres').value
         
            var resultado = parseInt(numerouno) + parseInt(numerodos) + parseInt(numerotres)
    
            console.log(resultado)
        
            document.getElementById('resultado').value = "La operación es una suma y el resultado es " + resultado 
    
        }
    }
}