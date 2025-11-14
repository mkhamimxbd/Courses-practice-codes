const vault = {
  emails: {
    himjonypersonal01: {
      email: 'himjonypersonal01@gmail.com',
      password: 'iamamuslim1'
    },
    mkhamimbd: {
      email: 'mkhamimbd@gmail.com',
      password: 'thisIsMyPassword123'
    }
  } 
};

const vaultString = JSON.stringify(vault);

console.log(JSON.parse(vaultString));