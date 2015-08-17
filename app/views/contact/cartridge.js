let contactStore = require('../../stores/contact');

let Cartridge = React.createClass({
    mixins: [Focus.components.common.mixin.storeBehaviour],
    getInitialState() {
        return {};
    },
    stores: [{
        store: contactStore,
        properties: ['informations']
    }],
    style: {
        avatar: {
            float: 'left',
            marginRight: '20px'
        },
        cartridge: {
            height: '150px'
        }
    },
    render() {
        let {avatar, firstName, lastName, job} = this.state;
        return (
            <div style={this.style.cartridge}>
                <img src={avatar} style={this.style.avatar}/>
                <h1>{`${firstName} ${lastName}`}</h1>
                <p>{job}</p>
            </div>
        );
    }
});

module.exports = Cartridge;
