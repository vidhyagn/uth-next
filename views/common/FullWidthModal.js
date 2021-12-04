import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ContentSlider from "../../views/common/hotelSlider";

class FullWidthModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalStatus: false,
            modalTitle: '',
            modalBody: '',
            modalHeader: true,
            modalFooter: true,
            OKButton : true,
            CANCELButton : true,
            OKText : 'CLOSE',
            CANCELText : 'CANCEL'

        }
    }
    componentDidMount() {
        this.setState({
            modalStatus : this.props.modalStatus,
            modalTitle: this.props.modalTitle,
            modalBody: this.props.modalBody,
            modalHeader : this.props.modalHeader,
            modalFooter : this.props.modalFooter,
            OKButton : this.props.OKButton,
            CANCELButton : this.props.CANCELButton,
            OKText : this.props.OKText ? this.props.OKText : this.state.OKText,
            CANCELText : this.props.CANCELText,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.modalStatus !== prevProps.modalStatus) {
            this.setState({
                modalStatus : this.props.modalStatus
            })
        }
        if(this.props.modalTitle !== prevProps.modalTitle) {
            this.setState({
                modalTitle : this.props.modalTitle
            })
        }
        if(this.props.modalBody !== prevProps.modalBody) {
            this.setState({
                modalBody : this.props.modalBody
            })
        }
        if(this.props.modalHeader !== prevProps.modalHeader) {
            this.setState({
                modalHeader : this.props.modalHeader
            })
        }
        if(this.props.modalFooter !== prevProps.modalFooter) {
            this.setState({
                modalFooter : this.props.modalFooter
            })
        }
        if(this.props.OKButton !== prevProps.OKButton) {
            this.setState({
                OKButton : this.props.OKButton
            })
        }
        if(this.props.CANCELButton !== prevProps.CANCELButton) {
            this.setState({
                CANCELButton : this.props.CANCELButton
            })
        }
        if(this.props.OKText !== prevProps.OKText) {
            this.setState({
                OKText : this.props.OKText
            })
        }
        if(this.props.CANCELText !== prevProps.CANCELText) {
            this.setState({
                CANCELText : this.props.CANCELText
            })
        }
    }

    toggle = () => {
        this.props.OKAction()
    }

    render() {

        let modalStatus = this.state.modalStatus;
        let modalTitle = this.state.modalTitle;
        let modalBody = this.state.modalBody;

        return (
            <div>
                <Modal isOpen={modalStatus} toggle={this.toggle} className="modal-dialog-centered modal-xl">

                    <ModalBody>

                        {modalBody}


                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default FullWidthModal;