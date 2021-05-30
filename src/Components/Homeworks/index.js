import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';

function Homeworks() {
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
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/ShaivyT/-GitPracticeHW1" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td> 
          <td><a href="https://codepen.io/shaivy/pen/bGqWyQZ?editors=1111" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Homework 2.1</td>
          <td>Local and Session Storage - Codepen link</td>
          <td><a href="https://codepen.io/shaivy/pen/KKWvMrz?editors=1111" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Homework 2.2</td>
          <td>HTML Website - Github Link</td>
          <td><a href="https://github.com/ShaivyT/HtmlWebsite" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Homework 3.1</td>
          <td>CSS Selectors Exercise</td>
          <td><a href="https://codepen.io/shaivy/pen/XWMaQjV" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Homework 3.2</td>
          <td>Navigation Bar</td>
          <td><a href="https://codepen.io/shaivy/pen/oNZGvob" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Homework 3.3</td>
          <td>JavaScript Function</td>
          <td><a href="https://codepen.io/shaivy/pen/yLMoWYE?editors=1111" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Homework Quiz</td>
          <td>Quiz on Codepen</td>
          <td><a href="https://codepen.io/shaivy/pen/JjWrPdQ" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Homework 4</td>
          <td>HTML Questionnaire</td>
          <td><a href="https://friendly-kare-3a0f81.netlify.app/" target="_blank" rel="noreferrer"> Link</a> </td>
        </tr>
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
