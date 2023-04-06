const links = {
  state: {
   
    other:[
      {
      id: 0,
      text: 'main',
      link: "/",
      
    },
      
    ],
  },
   getters: {
    getHeaderLinks(state) {
      return {
        
        other: state.other
      }
    },
    getFooterLinks(state){
      return {
                other: state.other
      }
    }
  },
};
export default links