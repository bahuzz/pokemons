import React,{Component} from 'react';

export default class Pokemon extends Component {


    render() {
        let { item }  = this.props;
        let { name,weight,sprites,height,base_experience,types,stats } = item;
        let typesList = types.map(item => {
            return (
                <span className="type">{item.type.name}</span>
            )
        });
        let statsList = stats.map(item => {
            return(
                <div className="char">
                    <span className="char__label">{item.stat.name}</span>
                    <span className="char__value">{item.base_stat}</span>
                </div>
            )
        });
        
        return (
            <div className='pokemon'>
                <h3 className="pokemon__name">{name}</h3>
                <div className="pokemon__image">
                    <img src={sprites.front_default} alt={name}></img>
                </div>
                <div className="char">
                    <span className="char__label">exp</span>
                    <span className="char__value">{base_experience}</span>
                </div>
                <div className="char">
                    <span className="char__label">weight</span>
                    <span className="char__value">{weight}</span>
                </div>
                <div className="char">
                    <span className="char__label">height</span>
                    <span className="char__value">{height}</span>
                </div>
                {statsList}
                <div className="char">
                    <span className="char__label">types</span>
                    <span className="char__value">{typesList}</span>
                </div>
            </div>
            )
    }
}