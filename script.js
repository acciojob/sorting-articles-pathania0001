//your JS code here. If required.
let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 let articals = ["the","a","an"];
	 bands.sort((a,b)=>{
	 let wordsInA =a.split(" ");
		let wordsInB = b.split(" ");
		let al = wordsInA.length,bl=wordsInB.length;
		let compA = "",compB="";
		for(let i=0;i<al||i<bl;i++)
			{
				if(i<al && !articals.includes(wordsInA[i].toLowerCase()))
				{
                   compA += wordsInA[i].toLowerCase();
				}
				if(i<bl && !articals.includes(wordsInB[i].toLowerCase()))
				{
                   compB += wordsInB[i].toLowerCase();
				}
			
			}
//		console.log(compA,compB,compA<compB)
		return compA.localeCompare(compB);
		
})
let ul = document.getElementById("band");
bands.forEach((item)=>{
   let li = document.createElement("li");
	li.textContent = item;
	ul.appendChild(li);
 })



