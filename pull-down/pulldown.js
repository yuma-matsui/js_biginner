function changePage(){
  document.getElementById('form').addEventListener('change', function(){
    location.href = this.select.value;
  });
}

function pageCheck(){
  const lang = document.querySelector('html').lang;
  console.log(lang);

  switch (lang){
    case 'ja':
      document.querySelector('option[value="index.html"]').selected = true;
      break
    case 'en':
      document.querySelector('option[value="index-en.html"]').selected = true;
      break
    case 'zh':
      document.querySelector('option[value="index-zh.html"]').selected = true;
      break
  }
}

pageCheck();
changePage();