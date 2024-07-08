const axios = require('axios');
(async()=>{
    const response = await axios.get('https://api.hunt.town/locations.json');
    var data = response.data;
      // users per city 
      data = data.sort((a, b) => {
          if (a._count.users > b._count.users) {
            return -1;
          }
        });
      // users per country
      let usersPerCountry = {};
      data.forEach((entry)=>{
          if(usersPerCountry[entry.country]){
              usersPerCountry[entry.country] = usersPerCountry[entry.country]+entry._count.users;
          }else{
              usersPerCountry[entry.country] = entry._count.users;
          }
        
      });
        console.log(usersPerCountry);
})()
