// // clearText=(text)=>{
// //     var textNew=text.trim();
// //     var data=[];
// //     var res = textNew.split(" ");
// //     for(let i=0;i<res.length;i++){
// //     if(res[i]!==""){
// //         data.push(res[i]);
// //     }
// //     }
// //     var texNews=data.join(" ");
// // return texNews;
// // }

// function cleanText(text){
// //     var textNew=text.trim();
// //     var data=[];
// //     var res = textNew.split(" ");
// //     for(let i=0;i<res.length;i++){
// //         if(res[i]!==""){
// //             data.push(res[i]);
// //         }
// //     }
// //     var texNews=data.join(" ");
// // return texNews;
// let temp = text.trim()
//     let result = ""
//     for (let i =0; i<temp.length; i++) {
//         if (!(temp[i] === " " && temp[i+1] === " ")  ) {
//            result += temp[i]
//         }
//     }
//     return result
// }
// function cleanText2(text){
//     text=text.trim();
//     return text.replace(/\s\s+/g, " ");
// }
// console.log(this.cleanText("       abc      xyz       "));

// // console.log(cleanText2("       abc      xyz       "));

// function findTime(text){
//     const regex = /\d{2}:\d{2}:\d{2}|\d{2}\.\d{2}\.\d{2}|\d{2}h\d{2}m\d{2}s/;
//     return regex.test(text);
//   }
// //   console.log(findTime("05.20.30"));
// // findTime=(text)=>{

    
// // }

// function sortText(text1, text2) {
//     if(text1.length>text2||text1.length<text2){
//         return false;
//     }else{
//         var text1New=text1.split("");
//         var text2New=text2.split("");
//         text1New=text1New.sort();
//         text2New=text2New.sort();
//         for(let i=0;i<text1.length;i++){
//             if(text1New[i]!==text2New[i]){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(sortText("chinh","hchni"));
function checkNumberPlate(string) {
    //43K-205.37 27L-9436 43K.20537 27L.9436.
    const regex=/43K-\d{3}\.\d{2}|43K\.\d{5}|27L-\d{4}|27L\.\d{4}/;
    return regex.test(string);

}
console.log(checkNumberPlate("43K-285.37"));
console.log(checkNumberPlate("27L-9436"));
console.log(checkNumberPlate("43K.20537"));
console.log(checkNumberPlate("27L.9436"));