import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class QuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        phoneNumber: "",
        description: ""
      }
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const values = { ...this.state.values };
    values[input.id] = input.value;
    this.setState({ values });
  };

  handleSubmit = () => {
    const values = { ...this.state.values };
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="email">
              <Form.Label>E-Posta</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="email"
                placeholder="e-posta adresinizi giriniz..."
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>İletişim Numarası</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                placeholder="Tarafınıza daha hızlı dönüş yapılması için tel. numarası bırakabilirsiniz..."
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="sorunuzu yazınız..."
                as="textarea"
                rows="3"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Vazgeç</Button>
            <Button type="submit">Gönder</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default QuestionModal;
