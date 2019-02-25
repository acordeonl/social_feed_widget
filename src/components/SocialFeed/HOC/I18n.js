import React from "react";

export default WrappedComponent =>
    class I18n extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                translations: {
                    header: 'Social Feed'
                }
            }
        }
        render() {
            return <WrappedComponent i18n={this.state.translations} />;
        }
    };