import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class QuestionModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
          <Modal.Body>
            <Form.Group controlId="email">
              <Form.Label>E-Posta</Form.Label>
              <Form.Control
                type="email"
                placeholder="e-posta adresinizi giriniz..."
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>İletişim Numarası</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tarafınıza daha hızlı dönüş yapılması için tel. numarası bırakabilirsiniz..."
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control
                placeholder="sorunuzu yazınız..."
                as="textarea"
                rows="3"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Vazgec</Button>
            <Button type="submit" onClick={this.props.onHide}>
              Gonder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default QuestionModal;
