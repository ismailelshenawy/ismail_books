var bookInner = document.getElementById("bookInner");
var readBook1;
var readBook2;
var books;
var ForSingelBook = document.getElementById("ForSingelBook");
var inputSearch = document.getElementById("inputSearch");
// ده المفروض نوع فى list بيجيب كل الكتب full-overview

async function gitApiBook() {
  readBook1 = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=dUI0I7UN98DTkJjq2AianRrGrqCdxqKS"
  );

  readBook2 = await readBook1.json();
  books = readBook2.results.books;
  // console.log(books);

  console.log(books);
  var innerForHtml = ``;
  for (let i = 0; i < books.length; i++) {
    innerForHtml += ` <div class="card col-md-4 col-sm-2 m-1 " style="width: 18rem">
        <img src="${books[i].book_image}" alt="" class="card-img-top" onclick=" display(${i})">
          <div class="card-body">
            <h5 class="card-title">${books[i].title}</h5>
            <p class="موضوع الكتاب">
         ${books[i].description}.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${books[i].title}اسم الكتاب</li>
            <li class="list-group-item"> ${books[i].author}اسم المؤلف</li>
            <li class="list-group-item">${books[i].publisher}الناشر</li>
          </ul>
          <div class="موضوع الكتاب">
            <a href="${books[i].buy_links[0].url}" class="card-link">شراء الكتاب</a>
            <a href="${books[i].buy_links[1].url}" class="card-link">شراء الكتاب</a>
          </div>
        </div>

     `;
  }

  bookInner.innerHTML = innerForHtml;
}
gitApiBook();
// =================== end first function===============

// ==============strat function for singel book=========
// فنيكش لعرض الكتاب الواحد
function display(i) {
  // console.log(i);
  innerForHtml = `<div class="row bg-body-tertiary ">
        <div class="col p-0 ">
          <img
            src="${books[i].book_image}"
            alt=""
            class="w-100 "
            width="400px"
            height="400px"
          />
        </div>
        <div class="col align-self-center">
          <div >
            <h5 >${books[i].title}</h5>
            <p >${books[i].description}.</p>

            <ul class="list-unstyled">
              <li>${books[i].title}اسم الكتاب</li>
              <li>author : ${books[i].author}</li>
              <li>${books[i].price}السعر</li>
            </ul>
            <div class="">
              <button class="btn btn-danger">
                <a
                  href="${books[i].buy_links[0].url}"
                  class="text-decoration-none"
                  >شراء الكتاب</a
                >
              </button>
              <button class="btn btn-danger">
                <a
                  href="${books[i].buy_links[1].url}"
                  class="text-decoration-none"
                  >شراء الكتاب</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>

     `;
  ForSingelBook.innerHTML = innerForHtml;
}
display();
// =========================end funtion for singel book===========


// ============== strat function for search ===============
function searchBooks() {
  var search2 = inputSearch.value;
  var search3 = "trade-fiction-paperback";
  // console.log(search2);
  async function gitApiBook() {
    readBook1 = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${search2}.json?api-key=dUI0I7UN98DTkJjq2AianRrGrqCdxqKS`
    );

    readBook2 = await readBook1.json();
    books = readBook2.results.books;

    // console.log(books);
    var innerForHtml = ``;
    for (let i = 0; i < books.length; i++) {
      innerForHtml += ` <div class="card col-md-4 col-sm-2 m-1 " style="width: 18rem">
          <img src="${books[i].book_image}" alt="" class="card-img-top" onclick=" display(${i})">
            <div class="card-body">
              <h5 class="card-title">${books[i].title}</h5>
              <p class="موضوع الكتاب">
           ${books[i].description}.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> ${books[i].title}اسم الكتاب</li>
              <li class="list-group-item"> ${books[i].author}اسم المؤلف</li>
              <li class="list-group-item">${books[i].publisher}الناشر</li>
            </ul>
            <div class="موضوع الكتاب">
              <a href="${books[i].buy_links[0].url}" class="card-link">شراء الكتاب</a>
              <a href="${books[i].buy_links[1].url}" class="card-link">شراء الكتاب</a>
            </div>
          </div>

       `;
    }

    bookInner.innerHTML = innerForHtml;
  }
  gitApiBook();
}
// ============== end function for search ==============
// ================== for trying ======
function testOnClickForHomeButton(){
  console.log("we can do any thing")
}
testOnClickForHomeButton();