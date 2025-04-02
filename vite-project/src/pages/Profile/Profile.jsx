import React, { useState } from 'react';
import { Container, Nav, Form, Button, Row, Col, Card, Table } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('info'); // Quản lý tab đang được chọn

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="py-5 account-container">
      <h2 className="mb-4 text-center text-uppercase">Tài khoản của bạn</h2>

      <Row>
        {/* Menu bên trái */}
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    eventKey="info"
                    className={`custom-nav-link ${activeTab === 'info' ? 'active' : ''}`}
                    onClick={() => handleSelectTab('info')}
                  >
                    Thông tin tài khoản
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="address"
                    className={`custom-nav-link ${activeTab === 'address' ? 'active' : ''}`}
                    onClick={() => handleSelectTab('address')}
                  >
                    Danh sách địa chỉ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="history"
                    className={`custom-nav-link ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => handleSelectTab('history')}
                  >
                    Lịch sử mua hàng
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        {/* Nội dung bên phải */}
        <Col md={9}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              {activeTab === 'info' && (
                <>
                  <h4 className="mb-4">Thông tin tài khoản</h4>
                  <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="koutachan1147@gmail.com"
                        defaultValue="koutachan1147@gmail.com"
                        className="custom-input"
                      />
                    </Form.Group>

                    <h4 className="mt-4 mb-3">Thông tin cá nhân</h4>
                    <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label>Họ và tên</Form.Label>
                      <Form.Control type="text" placeholder="Nguyễn Văn A" className="custom-input" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBirthday">
                      <Form.Label>Ngày sinh</Form.Label>
                      <Form.Control type="text" placeholder="dd/mm/yyyy" className="custom-input" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                      <Form.Label>Giới tính</Form.Label>
                      <Form.Select defaultValue="default" className="custom-input">
                        <option value="default" disabled>
                          -- Chọn giới tính --
                        </option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                      </Form.Select>
                    </Form.Group>

                    <Button variant="primary" className="mt-3 px-4 py-2">
                      Cập nhật thông tin
                    </Button>
                  </Form>
                </>
              )}

              {activeTab === 'address' && (
                <>
                  <h4 className="mb-4">Danh sách địa chỉ</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Địa chỉ 1:</strong> 123 Đường ABC, Quận 1, TP.HCM
                    </li>
                    <li className="list-group-item">
                      <strong>Địa chỉ 2:</strong> 456 Đường XYZ, Quận 2, TP.HCM
                    </li>
                    <li className="list-group-item">
                      <strong>Địa chỉ 3:</strong> 789 Đường DEF, Quận 3, TP.HCM
                    </li>
                  </ul>
                  <Button variant="primary" className="mt-3 px-4 py-2">
                    Thêm địa chỉ mới
                  </Button>
                </>
              )}

              {activeTab === 'history' && (
                <>
                  <h4 className="mb-4">Lịch sử mua hàng</h4>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Ngày</th>
                        <th>Sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>01/04/2025</td>
                        <td>Mặt nạ dưỡng da</td>
                        <td>500,000 VND</td>
                        <td>Đã giao</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15/03/2025</td>
                        <td>Sữa rửa mặt</td>
                        <td>300,000 VND</td>
                        <td>Đang xử lý</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;