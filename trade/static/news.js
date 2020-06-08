//GET /article/?format=api
// let newsData;
// function AJAXrequest(){
//     var $news = $('#news');
//     $.ajax({
//         type: 'GET',
//         url: '/article/?format=json',
//         success: function(data){
//             console.log(data);
//             newsData = data;
//         }
//     });
// };

// AJAXrequest()
const newsContainer = document.querySelector('#news');




const newsURL = '/article/?format=json' 
fetch(newsURL)
    .then(res => res.json())
    .then(data => {
        data.forEach(news => {
            newsContainer.insertAdjacentHTML('afterbegin', `
        <div class="visible-block">
            <div class="article-container">
				<a target="_blank" rel="noopener noreferrer" class="news-href" href="${news.url}">
				<div class="img-container">
					<img class="news-img" src="${news.slug}" alt="${news.title}">
				</div>
				<div class="title-container">
					<h2 class="news-title">${news.title}</h2>
				</div>
			</a>
        </div>
        </div>
            `)

        })

        console.log(data);
    })
    .catch(error => console.log('problem'))


    $(function(){
        setTimeout(function(){
            $(".visible-block").slice(0, 6).show()}, 200);

        $("#loadMore").on("click", function(e){
          e.preventDefault();
          ($(".visible-block:hidden").slice(0, 6)).slideDown();
          if($(".visible-block:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
          }
        });
      })