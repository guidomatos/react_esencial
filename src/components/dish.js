import React, { Component, Fragment } from "react";
import {
    Card,
    CardContent,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';
import ScatterPlot from '@material-ui/icons/ScatterPlot';



// import Button from '@material-ui/core/Button';

export class Flag extends Component{
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        );
    }
}

export class Ingredient extends Component {
    render() {
        //return React.createElement('h4', {}, "Ingrediente");
        return(
          <Fragment>
              <h4>Ingredientes</h4>
              <h4>Ingredientes</h4>
          </Fragment>  
        );
    }
}

class Dish extends Component{

    ingredients = ["Tortilla", "Carne", "Cebolla"];

    countIngredients(){
        return this.ingredients.length;
    }

    render() {

        // const { params } = this.props.match;

        // return (
        //     <div className="dish">
        //         <h1>{ params.name }</h1>
        //         <h1>{ this.props.name }</h1>
        //         <h3>{ this.countIngredients() }</h3>
        //         <ul>
        //             {this.ingredients.map((ingredient, index) => (
        //                 <li key={index}>{ingredient}</li>
        //             ))}
        //         </ul>
        //         <Button variant="contained">Elegir</Button>
        //     </div>
        // );

        return (
            <Card className="card">
                <CardContent>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div">{this.props.name}
                            </ListSubheader>
                        }
                    >
                        {this.props.ingredients.map((ingredient, index) =>
                        (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <ScatterPlot>

                                    </ScatterPlot>
                                </ListItemIcon>
                                <ListItemText inset primary={ingredient}></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        )

    }
}

export default Dish;