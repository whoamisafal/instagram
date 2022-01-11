import React from 'react';
import HOST_URL from '../proxy';

class UserSearchNavSec extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            searchField: '',
            isLoading:false
        }
        this.onChangeField = this.onChangeField.bind(this);
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.Hclose=this.Hclose.bind(this);
       
    
    }
    componentDidMount() {

    }
    close() {
        this.setState({
            searchField: ''
        })
        document.getElementsByClassName('search-result')[0].style.display = 'none';

    }
    Hclose() {
        setTimeout(()=>{
            this.setState({
                searchField: ''
            })
            document.getElementsByClassName('search-result')[0].style.display = 'none';
        },500)

    }
    show() {
        document.getElementsByClassName('search-result')[0].style.display = 'block';
    }
    onChangeField(e) {
        e.preventDefault();
        this.setState({
            searchField: e.target.value,
            isLoading:true
        })
       

        let url = HOST_URL+'/search?q=' + e.target.value;
        fetch(url, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },

        }).then(res => res.json())
            .then(data => {
                this.setState({
                    searchResult: data,
                    isLoading:false
                })
            }).catch(err => {
                console.log(err)
                this.setState({
                    isLoading:false
                })
            })

    }
  




    render() {
        return <>
            <input type="Search" className='search-people' placeholder="Search..." value={this.state.searchField} onChange={this.onChangeField} autoComplete='off'
                onFocus={this.show}  onBlur={this.Hclose}/>
            <div className='search-result'  onBlur={this.close}>
              

                {this.isLoading?<><h1>Loading...</h1></>:  this.state.searchResult.length > 0 ? this.state.searchResult.map(user => {
                    return <a href={'/'+user.username} style={{textDecoration:'none'}}> <div className='search-result-item'>
                        <img src={user.profile} alt={user.username} className='search-result-img'  />
                        <div className='search-result-info'>
                        <h2 class='search-result-fullname'>{user.fullname}</h2>
                        <p class="search-result-username">{user.username}</p>
                        </div>
                    </div></a> 
                })
                    : <>No result</>
                }

            </div>
        </>
    }


}

export default UserSearchNavSec