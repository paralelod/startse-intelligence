// export function generateItems(length) {
//   return Array.from(Array(length), (_, index) => index.toString());
// }


export function generateItems(length) {
  const dataTable = [
      {id: 35, title: 'jumper'},
      {id: 35, title: 'jumper'},
      {id: 35, title: 'jumper'}
  ]
  return(
    Array.from(Array(length), (_, index) => index.toString())
      
  );
}


// export function generateItems() {
//   const dataTable = [{id: 35, title: 'jumper'},
//     {id: 35, title: 'jumper'},{id: 35, title: 'jumper'}]
    
//   // for (let i = 0; i < length; i++) {
//   //   dataTable.push({
//   //     id: i,
//   //     index:i,
//   //     title: 'holla',
//   //     email: "gateeinho"
//   //   });
//   // }
  
//   return(
    
//     Array.from(Array(dataTable.length), (_, index) => index.toString())
//   )
  
// }