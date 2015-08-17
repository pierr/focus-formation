let contactStore = require('../../stores/contact');

let Summary = React.createClass({
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
            marginRight: '20px',
            height: '40px'
        },
        summary: {
            // height: '150px'
        }
    },
    render() {
        let {avatar, firstName, lastName} = this.state;
        return (
            <div style={this.style.summary}>
                <img src={avatar} style={this.style.avatar}/>
                <b>{`${firstName} ${lastName}`}</b>
            </div>
        );
    }
});

module.exports = Summary;
