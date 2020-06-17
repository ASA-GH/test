import React from 'react';
import Dialogs from './Dialogs';



/*
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


 let mapStateToProps = (state) => {
 return {
    dialogsPage: state.dialogsPage
     }                   
     }               
let mapDispatchToProps = (dispatch) => {
 return {
    sendMessage: () => {
    dispatch(sendMessageCreator());
                            },
    updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
                            }
                        }     
                    }
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
*/


const DialogsContainer = (props) => {
  return (
      <Dialogs />
  )
};
       
export default DialogsContainer;