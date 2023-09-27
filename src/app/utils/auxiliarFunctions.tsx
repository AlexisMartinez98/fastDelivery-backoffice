// eslint-disable-next-line
export function ArrayAuxVistaRepartidores(totalRepartidores:any){

    //agrupo los repartidores en un array de array, donde cada sub array tiene hasta 4 repartidores
    const nuevoArrayRepartidores=[]
    
    const arr=totalRepartidores
    
    while(arr.length>0){
        nuevoArrayRepartidores.push(arr.splice(0,4))}
    
    return nuevoArrayRepartidores}