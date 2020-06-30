import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { method:'', url:'', request:{} };
    }

    render() {
        return (
          <main className="main">
            <form onSubmit={this.handleSubmit}>

                  <div className="div">
                    <input className="input" type="text" placeholder="Enter URL" onChange={this.handleUrl} />
                    <button type="submit">GO!</button>
                  </div>
                 
                  <div className="div">
                    <span className="method"><input className="methodGet"  type="radio" name="method" value="get"onClick={this.handleMethod}/>GET</span>
                    <span className="method" ><input type="radio" name="method" value="post"onClick={this.handleMethod}/>POST</span>
                    <span className="method"><input type="radio" name="method" value="put"onClick={this.handleMethod}/>PUT</span>
                    <span className="method"><input type="radio" name="method" value="delete"onClick={this.handleMethod}/>DELETE</span>
                  </div>

            </form>

            <div className="results">
                <h3 className ="methodOutput">{this.state.request.method}</h3>  
                <h3 className="urlOutput">{this.state.request.url} </h3>
            </div>
          
          </main>
        );
      }

    handleUrl = (e) => {
      const url = e.target.value;
      this.setState({ url });//update the state + fire the render method
    };

    handleMethod = (e) => {
      const method = e.target.value;
      this.setState({ method });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      if ( this.state.url && this.state.method){
        let request = {
          url: this.state.url,
          method: this.state.method,
        };  
        let url = '';
        let method = '';
        this.setState({request, url, method});
        e.target.reset();
      }else{
        alert('missing information');
      }
      };
  
  }


export default Form;