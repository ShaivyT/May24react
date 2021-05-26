import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';

function Project() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Shaivy Tiwari and I am student here </p>
          <NavBar />

          <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Project1</td>
            <td>Html Practice</td>
            <td><a href="" target="_blank"> Link</a></td>
          </tr>
        </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Project;
