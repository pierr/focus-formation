//Chargement des dépendances.
let {types} = Focus.component;
let Informations = require('./informations');
let Address = require('./address');
let Friends = require('./friends-block');

let Cartridge = require('./cartridge');
let Summary = require('./summary');

let createDetail = Focus.components.page.createDetail;

//Page composite.
let ContactDetail = React.createClass({
    mixins: [...Focus.components.page.detail.mixins],
    propTypes:{
        id: types('string')
    },
    getInitialState() {
        return {};
    },
    cartridgeConfiguration() {
        return {
            summary: {component: Summary},
            cartridge: {component: Cartridge},
            actions: {
                primary: [],
                secondary: []
            }
        }
    },
    render(){
        let {id} = this.props;
        return (
            <div className='page-detail-contact'>
                <Informations id={id} />
                <Address id={id} />
                <Friends id={id} />
            </div>
      );
    }
});

module.exports = ContactDetail;
