import React from "react";
import Square from "./Square";
import Grid from "@mui/material/Grid";

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Grid container height="300px" width="300px" spacing={0.5}>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(0)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(1)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(2)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(3)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(4)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(5)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(6)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(7)}
        </Grid>
        <Grid item height="100px" width="100px" xs={4}>
          {this.renderSquare(8)}
        </Grid>
      </Grid>
    );
  }
}
