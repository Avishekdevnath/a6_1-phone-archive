//////////////////// Spinner function ///////////////////

const displaySpinner = display => {
  document.getElementById('spinner-loading').style.display = display;
}



//////////////// Error Function //////////////////////////

const displayError = display => {
  document.getElementById('error-found').style.display = display;
}



////////////// Displaying Default Content //////////////////

const displayContent = display => {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => content.style.display = display);
}
displayContent('none');




////////////////// Searching function ///////////////////////

const searchPhone = () => {
  document.getElementById('welcome').style.display = 'none';

  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);



  ///////////////// Error Handling /////////////////////////

  if (searchText === '') {

    displayError('block');
    displayContent('none');

  } else {

    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data));
    displayError('none');
    displaySpinner('block');
    displayContent('none');
  }
};



/////////////////// Displaying Result /////////////////////////

const displaySearchResult = (phones) => {
  console.log(phones);
  const { data, status } = phones;
  document.getElementById("search-count").textContent = `${status}`;

  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = '';



  //////////////////// Error Handling /////////////////////////

  if (data.length === 0) {
    displaySpinner('none');
    displayContent('none');
    displayError('block');
  }

  else {
    displayContent('none');
    displayError('none');
    console.log(data[0]);
    data.forEach((phone) => {
      const div = document.createElement('div');
      div.classList.add('col');


      /////////////////////// phone Cards Here //////////////

      div.innerHTML = `
      <div class="card h-100 card-design border border-success">
            <img src="${phone.image}" alt="${phone.phone_name}"
                class="card-img-top img-fluid" style="height: 370px; border: 1px solid green; border-radius: 10px" alt="...">
            <div class="card-body">
                <table class="table">
                    <tbody class="text-start">
                        <tr>
                            <th>Phone Name</th>
                            <th>:</th>
                            <th>${phone.phone_name}</th>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <th>:</th>
                            <th>${phone.brand}</th>
                        </tr>
                        <tr>
                            <th>Phone slug</th>
                            <th>:</th>
                            <th>${phone.slug}</th>
                        </tr>
                       
                    </tbody>
                    
                </table>
                <div class="d-flex justify-content-center align-items-center">
                 <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Phone Details</button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Phone Details Modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${phone.image}" alt="${phone.phone_name}" class="card-img-top img-fluid"
              style="height: 370px; border: 1px solid green; border-radius: 10px" alt="...">
            <div class="card-body">
              <table class="table">
                <tbody class="text-start">
                  <tr>
                    <th>Phone Name</th>
                    <th>:</th>
                    <th>${phone.phone_name}</th>
                  </tr>
                  <tr>
                    <th>Brand</th>
                    <th>:</th>
                    <th>${phone.brand}</th>
                  </tr>
                  <tr>
                    <th>Phone slug</th>
                    <th>:</th>
                    <th>${phone.slug}</th>
                  </tr>
          
                </tbody>
              </table>
            </div> 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
      </div>
      </div>
            </div>
           
        </div>
        `;
      // <div class="card-footer text-center">
      //     <small class="text-muted">First published in ${phone.first_publish_year}</small>
      // </div>
      // <tr>
      //     <th>Author</th>
      //     <th>:</th>
      //     <th>${phone.author_name ? phone.author_name[0] : "unknown author"}</th>
      // </tr>
      // <tr>
      //     <th>Publisher</th>
      //     <th>:</th>
      //     <th>${phone.publisher ? phone.publisher[0] : "unknown publisher"}</th>
      // </tr>
      searchResult.appendChild(div);
    });
    displaySpinner('none');
    displayContent('block');
  }
};

////////////////// Searching function ///////////////////////

const searchSinglePhone = () => {
  document.getElementById('welcome').style.display = 'none';

  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);



  ///////////////// Error Handling /////////////////////////

  if (searchText === '') {

    displayError('block');
    displayContent('none');

  } else {

    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data));
    displayError('none');
    displaySpinner('block');
    displayContent('none');
  }
};



/////////////////// Displaying Result /////////////////////////

const displaySearchResult = (phones) => {
  console.log(phones);
  const { data, status } = phones;
  document.getElementById("search-count").textContent = `${status}`;

  const searchResult = document.getElementById("search-single-result");
  searchResult.innerHTML = '';



  //////////////////// Error Handling /////////////////////////

  if (data.length === 0) {
    displaySpinner('none');
    displayContent('none');
    displayError('block');
  }

  else {
    displayContent('none');
    displayError('none');
    console.log(data[0]);
    data.forEach((phone) => {
      const div = document.createElement('div');
      div.classList.add('col');


      /////////////////////// phone Cards Here //////////////

      div.innerHTML = `
      <div class="card h-100 card-design border border-success">
            <img src="${phone.image}" alt="${phone.phone_name}"
                class="card-img-top img-fluid" style="height: 370px; border: 1px solid green; border-radius: 10px" alt="...">
            <div class="card-body">
                <table class="table">
                    <tbody class="text-start">
                        <tr>
                            <th>Phone Name</th>
                            <th>:</th>
                            <th>${phone.phone_name}</th>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <th>:</th>
                            <th>${phone.brand}</th>
                        </tr>
                        <tr>
                            <th>Phone slug</th>
                            <th>:</th>
                            <th>${phone.slug}</th>
                        </tr>
                       
                    </tbody>
                    
                </table>
                <div class="d-flex justify-content-center align-items-center">
                 <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Phone Details</button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Phone Details Modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${phone.image}" alt="${phone.phone_name}" class="card-img-top img-fluid"
              style="height: 370px; border: 1px solid green; border-radius: 10px" alt="...">
            <div class="card-body">
              <table class="table">
                <tbody class="text-start">
                  <tr>
                    <th>Phone Name</th>
                    <th>:</th>
                    <th>${phone.phone_name}</th>
                  </tr>
                  <tr>
                    <th>Brand</th>
                    <th>:</th>
                    <th>${phone.brand}</th>
                  </tr>
                  <tr>
                    <th>Phone slug</th>
                    <th>:</th>
                    <th>${phone.slug}</th>
                  </tr>
          
                </tbody>
              </table>
            </div> 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
      </div>
      </div>
            </div>
           
        </div>
        `;
      // <div class="card-footer text-center">
      //     <small class="text-muted">First published in ${phone.first_publish_year}</small>
      // </div>
      // <tr>
      //     <th>Author</th>
      //     <th>:</th>
      //     <th>${phone.author_name ? phone.author_name[0] : "unknown author"}</th>
      // </tr>
      // <tr>
      //     <th>Publisher</th>
      //     <th>:</th>
      //     <th>${phone.publisher ? phone.publisher[0] : "unknown publisher"}</th>
      // </tr>
      searchResult.appendChild(div);
    });
    displaySpinner('none');
    displayContent('block');
  }
};
