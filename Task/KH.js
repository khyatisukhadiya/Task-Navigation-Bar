// const array = [
//     {
//         "albumId": 1,
//         "id": 1,
//         "title": "accusamus beatae ad facilis cum similique qui sunt",
//         "url": "https://via.placeholder.com/600/92c952",
//         "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//         "albumId": 1,
//         "id": 2,
//         "title": "reprehenderit est deserunt velit ipsam",
//         "url": "https://via.placeholder.com/600/771796",
//         "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//         "albumId": 1,
//         "id": 3,
//         "title": "officia porro iure quia iusto qui ipsa ut modi",
//         "url": "https://via.placeholder.com/600/24f355",
//         "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//         "albumId": 1,
//         "id": 4,
//         "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//         "url": "https://via.placeholder.com/600/d32776",
//         "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//         "albumId": 1,
//         "id": 5,
//         "title": "natus nisi omnis corporis facere molestiae rerum in",
//         "url": "https://via.placeholder.com/600/f66b97",
//         "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     },
//     {
//         "albumId": 1,
//         "id": 6,
//         "title": "accusamus ea aliquid et amet sequi nemo",
//         "url": "https://via.placeholder.com/600/56a8c2",
//         "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//     },
//     {
//         "albumId": 1,
//         "id": 7,
//         "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//         "url": "https://via.placeholder.com/600/b0f7cc",
//         "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
//     },
//     {
//         "albumId": 1,
//         "id": 8,
//         "title": "aut porro officiis laborum odit ea laudantium corporis",
//         "url": "https://via.placeholder.com/600/54176f",
//         "thumbnailUrl": "https://via.placeholder.com/150/54176f"
//     },
//     {
//         "albumId": 1,
//         "id": 9,
//         "title": "qui eius qui autem sed",
//         "url": "https://via.placeholder.com/600/51aa97",
//         "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
//     },
//     {
//         "albumId": 1,
//         "id": 10,
//         "title": "beatae et provident et ut vel",
//         "url": "https://via.placeholder.com/600/810b14",
//         "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//     }]

   

    const cardContainer = document.getElementById('cardContainer');

    const array = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur ",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    }
      // Rest of the array data...
    ];
    
    // Function to group array items into chunks
    function chunkArray(arr, chunkSize) {
      const chunkedArray = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
      }
      return chunkedArray;
    }
    
    // Chunk the array into groups of 4
    const chunkedArray = chunkArray(array, 4);
    
    // Loop through each chunk
    chunkedArray.forEach(chunk => {
      // Create a row for each group of cards
      const row = document.createElement('div');
      row.classList.add('row');
    
      // Loop through each item in the chunk
      chunk.forEach(item => {
        const col = document.createElement('div');
        col.classList.add('col');
    
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.style.marginBottom='50px';
    
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = item.thumbnailUrl;
        image.alt = '...';
    
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = item.title;
    
        const cardLink = document.createElement('a');
        cardLink.href = item.url;
        cardLink.classList.add('btn', 'btn-primary');
        cardLink.textContent = 'Go somewhere';
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardLink);
    
        card.appendChild(image);
        card.appendChild(cardBody);
    
        col.appendChild(card);
        row.appendChild(col);
      });
    
      cardContainer.appendChild(row);
    });
    