let u='scripts/XML_daily', d='.asp?date_req=17/02/2021', w=location+u+d, f=()=>{
  return fetch(w, {headers: {'Content-Type': 'application/xml'}})
  .then(res => console.log(res.data))};
