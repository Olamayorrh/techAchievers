/* const url = 'https://open-library2.p.rapidapi.com/search_title/booksss';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9fc9a997cmsh518d32157e950c4p157ceejsn1a0e2a95239e',
		'X-RapidAPI-Host': 'open-library2.p.rapidapi.com'
	}
}; */



const books = [

    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82563W?edition=ia%3Aharrypottersorce0000rowl_t5a1",
        "image": "https://covers.openlibrary.org/b/olid/OL32784488M-M.jpg"
      },
      {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82586W?edition=ia%3Aharrypotterdeath0000rowl_n2u6",
        "image": "https://covers.openlibrary.org/b/olid/OL10506200M-M.jpg"
      },
      {
        "title": "Harry Potter and the Goblet of Fire",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82577W?edition=ia%3Aharrypottergoble0000rowl_z6r7",
        "image": "https://covers.openlibrary.org/b/olid/OL37058078M-M.jpg"
      },
      {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82537W?edition=ia%3Aharrypotterchamb0000rowl_e1h5",
        "image": "https://covers.openlibrary.org/b/olid/OL32784120M-M.jpg"
      },
      {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82565W?edition=ia%3Aharrypottereoeni0000rowl",
        "image": "https://covers.openlibrary.org/b/olid/OL9158073M-M.jpg"
      },
      {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82536W?edition=ia%3Aharrypotterpriso0000rowl_g2m5",
        "image": "https://covers.openlibrary.org/b/olid/OL24549468M-M.jpg"
      },
      {
        "title": "Harry Potter and the Order of the Phoenix",
        "author": "J. K. Rowling",
        "url": "https://openlibrary.org//works/OL82548W?edition=ia%3Aharispoterisirfe0000rowl",
        "image": "https://covers.openlibrary.org/b/olid/OL37786194M-M.jpg"
      },
  
      {
        "title": "Harry Potter",
        "author": "Insight Editions",
        "url": "https://openlibrary.org//works/OL25435677W",
        "image": "https://covers.openlibrary.org/b/olid/OL34105008M-M.jpg"
      },
  
      {
        "title": "Harry Potter",
        "author": "Insight Editions",
        "url": "https://openlibrary.org//works/OL25420118W",
        "image": "https://covers.openlibrary.org/b/olid/OL34079643M-M.jpg"
      },
      {
        "title": "Harry Potter",
        "author": "Insight Editions",
        "url": "https://openlibrary.org//works/OL25476157W",
        "image": "https://covers.openlibrary.org/b/olid/OL34166524M-M.jpg"
      },
  
      {
        "title": "Harry Potter",
        "author": "MUTI",
        "url": "https://openlibrary.org//works/OL25433235W",
        "image": "https://covers.openlibrary.org/b/olid/OL34100160M-M.jpg"
      },
  
      {
        "title": "Harry Potter",
        "author": "Insight Editions Staff",
        "url": "https://openlibrary.org//works/OL25201820W",
        "image": "https://covers.openlibrary.org/b/olid/OL33612025M-M.jpg"
      }
  
  ];
  
  let a = async ()=>{
  
    try {
  /*     const response = await fetch(url, options);
      const result = await response.json();
  
      console.log(result); */
  
      let data = [];
      
      books.map(book=>
  
        data.push( `
  
        <div class="books">
  
          <div class="title">${book.title}</div>
          <div class="author">Author: <span>${book.author}</span></div>
          <img src="${book.image}" alt="" class="image">
  
        </div>`)
  
      );
  
      console.log({data});
    
  
      document.querySelector(".container").innerHTML = data;
      return result;
  
    } catch (error) {
      console.error(error);
    }
  }
  a()