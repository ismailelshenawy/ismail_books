 <div class=" card h-100" >
        <img src="${books[i].book_image}" alt="" class="card-img-top h-75"  >
          <div class="card-body">
            <h5 class="card-title">${books[i].title}</h5>
            <p class="موضوع الكتاب">
         ${books[i].description}.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${books[i].title}اسم الكتاب</li>
            <li class="list-group-item"> ${books[i].author}اسم المؤلف</li>
            <li class="list-group-item">${books[i].price}السعر</li>
          </ul>
          <div class="card-body">
            <a href="${books[i].buy_links[0].url}" class="card-link">شراء الكتاب</a>
            <a href="${books[i].buy_links[1].url}" class="card-link">شراء الكتاب</a>
          </div>
        </div>

