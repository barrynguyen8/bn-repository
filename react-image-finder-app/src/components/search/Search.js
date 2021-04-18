import React, { Component } from 'react'
import Select from 'react-select';
import ImageResults from '../image-results/ImageResults'
import Welcome from '../ui/Welcome'
import OutlinedInput from '@material-ui/core/OutlinedInput'

class Search extends Component {
    state = {
        selectData: [{ value: 4, label: "4" }, { value: 8, label: "8" }, { value: 16, label: "16" }, { value: 32, label: "32" }],
        searchText: '',
        amount: 8,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '21095131-10077c071323624f82a5885ea',
        images: [],
        searchHistory: []
    }
    onTextChange = event => {
        const val = event.target.value;
        this.setState({ [event.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] });
            } else {
                fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then((result) => result.json())
                    .then((data) => {
                        this.setState({ images: data.hits })
                        console.log(data)
                    })
            }
        });
    }

    onAmountChange = (event) => this.setState({ amount: event.value })

    customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? '#FF9B28' : '#0B72B9',
            padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 200,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
    render() {
        console.log(this.state.images);
        console.log(this.state.amount)
        return (
            <div>
                <br></br>
                <h2>Type in the image you would like to search within the box below:</h2>
                <br></br>
                <form onSubmit={this.onSubmit} className="form">
                    <br></br>
                    <OutlinedInput style={{ fontSize: 25 }} type="text" name="searchText" placeholder="eg. pandas" value={this.state.searchText} onChange={this.onTextChange} />
                </form>
                <div>
                    <br></br>
                Choose the number of images displayed:</div>
                <Select styles={this.customStyles} name="amount" options={this.state.selectData} onChange={this.onAmountChange} />
                <br></br>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : <Welcome />}
            </div>
        )
    }
}

export default Search;

