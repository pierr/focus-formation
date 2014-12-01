module.exports = function(p) {
  return {
    name: "user",
    url: '#user',
    roles: ["DEFAULT_ROLE"],
    headers: [{
      name: "search",
      url: '#user',
      roles: ['DEFAULT_ROLE']
    }],
    pages: [{
      name: "detail",
      url: '#user/:userId',
      roles: ['DEFAULT_ROLE']
    },{
      name: "detailComplexe",
      url: '#userComplete/:userId',
      roles: ['DEFAULT_ROLE']
    }
    ]
  };
};