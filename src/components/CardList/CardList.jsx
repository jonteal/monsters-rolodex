import { Component } from "react";
import './cardList.css';

class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        console.log('render from CardList');
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { name, email, id } = monster;

                    return (
                    <div key={id} className="card-container">
                        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                )})}
            </div>
        )
    }
}

export default CardList;