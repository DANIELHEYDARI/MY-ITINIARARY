import React, { Component } from 'react';

class CitiesList extends Component {

    state={
        cities:[] 
    }

    componentDidMount () {
        this.getData()
        console.log(this.state.cities)
    }
    getData = () => {
        this.setState({...this.state, isFetching: true})
        fetch("/cities/all")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    cities: data,
                    isFetching: false
                })
            })
    }

    render() {


        console.log(this.props);

        let citiesFiltrados = this.state.cities.filter(city => city.name.toUpperCase().startsWith(this.props.search))
        console.log(citiesFiltrados)

        let serchcities= citiesFiltrados.map((city) => {

            return(
                    <div className="search_css" key={city._id}>
                    <img src={city.img} alt="Avatar" />
                     
                      <span className="border">{city.name}</span>
                    </div> 
            ) 
          })
    

      return (
       
          <div>
            
            {serchcities}

          </div>
        
      );
    }
  }
  
  export default CitiesList;
  
  