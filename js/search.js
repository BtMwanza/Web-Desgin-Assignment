    function sortPage() {
      // Declare variables
      var input, filter, ul, li, a, i, textValue, section;
      input = document.getElementById('search');
      filter = input.value.toUpperCase();
      section = document.getElementById("products");
      //  ul = section.getElementsByTagName("ul");
      li = section.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName('p')[0];
        //  textValue = a.textContent || a.innerText;
        textValue = p.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";

        }
      }
    }