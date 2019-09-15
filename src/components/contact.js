import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" sytle={{body: '#b0ceff'}}>
        <Grid className="contact-grid">

          
        <Cell col={3}>
        <Textfield
          onChange={() => {}}
          label="First Name"
          style={{width: '200px'}}
         />
        </Cell>
        
        <Cell col={3}>
          <Textfield
          onChange={() => {}}
          label="Last Name"
          style={{width: '200px'}}
         />
      </Cell>
     
      <Cell col={12}>
        <Textfield
          onChange={() => {}}
          label="Message"
          rows={6}
          style={{width: '200px'}}
         />
        </Cell>
        
      


        </Grid>
        
        



        {/* <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Randle Kehinde</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0000 000 000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    0000 000 000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    info@randlekehinde.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid> */}
      </div>
    )
  }
}

export default Contact;
