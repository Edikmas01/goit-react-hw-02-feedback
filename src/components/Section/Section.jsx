import { Component } from "react";

export class Section extends Component {
    render() {
        return (
          <>
            <h1>{this.props.title}</h1>
            {this.props.children}
          </>
        );
    }
}